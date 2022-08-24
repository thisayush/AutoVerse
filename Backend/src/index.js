const express = require("express");
let cors = require("cors");

const app = express();

const userController = require("../controller/user.controller");
const carController = require("../controller/car.controller");
const bookingController = require("../controller/booking.controller");
const { register, login } = require("../controller/auth.controller");

app.use(cors());
app.use(express.json());

app.use("/users", userController);
app.use("/cars", carController);
app.post("/users/register", register);
app.post("/users/login", login);
app.use("/bookings", bookingController);
module.exports = app;
