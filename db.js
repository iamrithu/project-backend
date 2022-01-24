const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.DB, connectionParams, () => {
    console.log("connected to database succesfully");
  });
};
