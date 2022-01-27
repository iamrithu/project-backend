const express = require("express");
const router = express.Router();

const { User } = require("../models/user");
const Project = require("../models/project");
const GEO = require("../models/geoData");
const { Admin } = require("../models/admin");
//mobile
//get
router.get("/user", (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
});
router.get("/user/:mail", (req, res) => {
  User.findOne({ email: req.params.mail }).then((data) => {
    res.send(data);
  });
});
router.get("/user/details/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
//post
// router.post("/register", (req, res) => {
//   User.create(req.body).then((data) => {
//     res.send(data);
//   });
// });
//put
router.put("/user/edit/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
//delete
router.delete("/user/delete/:id", (req, res) => {
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
router.put("/project/edit/:id", (req, res) => {
  Project.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Project.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
router.post("/project/send", (req, res) => {
  console.log(req.body);
  Project.create(req.body).then((data) => {
    console.log(data);

    res.send(data);
  });
});
router.delete("/project/delete/:id", (req, res) => {
  Project.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});

//geocode
router.get("/geolocation", (req, res) => {
  GEO.find().then((data) => {
    res.send(data);
  });
});
router.get("/geolocation/:type", (req, res) => {
  GEO.findOne({ type: req.params.type }).then((data) => {
    res.send(data);
  });
});
router.get("/geolocation/id/:id", (req, res) => {
  GEO.find({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.get("/geolocation/project/:projectID", (req, res) => {
  GEO.find({ project_id: req.params.projectID }).then((data) => {
    res.send(data);
  });
});
//post

router.post("/geolocation", (req, res) => {
  console.log(req.body);
  GEO.create(req.body).then((data) => {
    res.send(data);
  });
});
//put
router.put("/geolocation/edit/:id", (req, res) => {
  GEO.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    GEO.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
});
//delete

router.delete("/geolocation/delete/:id", (req, res) => {
  GEO.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
});
router.delete("/geolocation/delete/all/:id", (req, res) => {
  GEO.findOneAndDelete({ project_id: req.params.id }).then((data) => {
    res.send(data);
  });
});
//delete all
router.delete("/clear", async (req, res) => {
  try {
    await Location.deleteMany({});
  } catch (error) {
    console.log(error);
  }
});
//--------------------------

//admin
router.get("/admin", (req, res) => {
  Admin.find().then((data) => {
    res.send(data);
  });
});
router.get("/admin/mail/:mail", (req, res) => {
  Admin.findOne({ email: req.params.mail }).then((data) => {
    res.send(data);
  });
});
router.get("/admin/:id", (req, res) => {
  Admin.findOne({ _id: req.params.mail }).then((data) => {
    res.send(data);
  });
});
router.get("/admin/:id", (req, res) => {
  Admin.findByIdAndRemove({ _id: req.params.mail }).then((data) => {
    res.send(data);
  });
});

////

///

module.exports = router;
