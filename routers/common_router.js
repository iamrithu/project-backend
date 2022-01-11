const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const Project = require("../models/project");
//mobile
//get
router.get("/register", (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
});
router.get("/register/:id", (req, res) => {
  User.findOne({ email: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.get("/register/details/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
//post
router.post("/register", (req, res) => {
  User.create(req.body).then((data) => {
    res.send(data);
  });
});
//put
router.put("/register/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
//delete
router.delete("/register/:id", (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});

//Project--------------------------
router.get("/project", (req, res) => {
  Project.find().then((data) => {
    res.send(data);
  });
});
router.get("/project/:id", (req, res) => {
  Project.find({ userId: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.get("/project/details/:id", (req, res) => {
  Project.find({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.put("/project/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
router.post("/project", (req, res) => {
  Project.create(req.body).then((data) => {
    res.send(data);
  });
});
router.delete("/project/:id", (req, res) => {
  Project.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});

module.exports = router;
