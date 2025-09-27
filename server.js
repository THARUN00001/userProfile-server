const express = require("express");
const cors = require('cors');
const path = require('path'); // <-- add this
const { PrismaClient } = require('./generated/prisma');
var { withAccelerate } = require('@prisma/extension-accelerate');
const registerRoute = require("./routes/registerRoute");
const userAddmoreDataOrEditData = require('./routes/userAddmoreDataOrEditData');
var loginRoute = require("./routes/loginRoute");

const prisma = new PrismaClient().$extends(withAccelerate());
const env = require("dotenv");
env.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/userRegistration", registerRoute);
app.use("/userAddmoreDataOrEditData", userAddmoreDataOrEditData);
app.use('/loginRoute', loginRoute);

app.listen(port, () => {
  console.log("Server running on port", port);
});
