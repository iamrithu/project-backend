require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const router = require("./routers/common_router");
const userRoutes = require("./routers/user");
const authRoutes = require("./routers/auth");

connection();

//middlewares

app.use(express.json());
app.use(cors());

// routes
app.use("/user", router);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
