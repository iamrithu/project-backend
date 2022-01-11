const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  userId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: [true, "projectname field is required"],
  },

  baseMap: {
    type: String,
    required: [true, "projectname field is required"],
  },
  state: {
    type: [],
    required: [true, "projectname field is required"],
  },
});

const User = mongoose.model("user-project", userSchema);

module.exports = User;
