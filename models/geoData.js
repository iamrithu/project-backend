const mongoose = require("mongoose");
const schema = mongoose.Schema;

const data = new schema({
  project_id: String,
  user_id: String,
  project_name: String,
  data: [],
});

const GeoLocation = mongoose.model("GeoData", data);

module.exports = GeoLocation;
