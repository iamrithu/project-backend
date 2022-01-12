const mongoose = require("mongoose");
const schema = mongoose.Schema;

const data = new schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  geoData: {},
  userID: { type: String, required: true },
  projectID: { type: String, required: true },
});

const GeoLocation = mongoose.model("GeoData", data);

module.exports = GeoLocation;
