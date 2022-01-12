require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const router = require("./routers/common_router");
const userRoutes = require("./routers/user");
const authRoutes = require("./routers/auth");
const admin = require("./routers/admin");
const admin_auth = require("./routers/admin-auth");

connection();

//middlewares

app.use(express.json());
app.use(cors());

// routes
app.use("/api", router);
app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", admin);
app.use("/api", admin_auth);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
