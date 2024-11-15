require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// Connect to MongoDB
require("./db/conn");

const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

// Serve React client in production mode
app.use(express.static(path.join(__dirname, "./client/build")));

// For any request that isn't API-related, serve index.html from React build
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
