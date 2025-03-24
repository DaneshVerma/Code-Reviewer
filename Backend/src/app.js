const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const userRoutes = require("./routes/user.routes");

// const connectToDB = require("../db/connect.db");
const cors = require("cors");
const app = express();
// connectToDB();
app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
  console.log("hellow world");
});

app.use("/ai", aiRoutes);
app.use("/user", userRoutes);

module.exports = app;
