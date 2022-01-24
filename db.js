const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(process.env.DB, connectionParams)
    .then(console.log("connected to database succesfully"))
    .catch((err) => {
      console.log("Error in  Db connection", err);
    });
};
