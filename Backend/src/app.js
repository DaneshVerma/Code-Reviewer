const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const userRoutes = require("./routes/user.routes");
const startRoutes = require("./routes/start.routes")
// const connectToDB = require("../db/connect.db");
const cors = require("cors");
const app = express();
// connectToDB();
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // For local testing
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
app.use(express.json());


app.use('/home', startRoutes)
app.use("/ai", aiRoutes);
app.use("/user", userRoutes);



module.exports = app;
