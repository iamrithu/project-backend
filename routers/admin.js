const router = require("express").Router();
const bcrypt = require("bcrypt");

const { Admin, validate } = require("../models/admin");

router.post("/admin", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await Admin.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exist" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new Admin({ ...req.body, password: hashPassword }).save();

    res.status(201).send({ message: "User Created Successfullu" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
