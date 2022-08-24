const express = require("express");

const Booking = require("../models/booking.model");

const router = express.Router();

router.get("/", async (req, res) => {
    try
    {
        const booking = await Booking.find().lean().exec();
        res.status(200).json({ booking: booking });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
})
router.get("/:userId", async (req, res) => {
    // get all cars booked by one user by passing UserId
    try
    {
        const booking = await Booking.find({ user: req.params.userId }).populate({
            path: "sub_car",
            select: 'name segment subscribe_charge_per_month rental_charge_per_km brand location'
        }).populate({
            path: "rent_car",
            select: 'name location segment subscribe_charge_per_month rental_charge_per_km brand'
        }).lean().exec();
        res.status(200).json({ booking: booking });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.post("/", async (req, res) => {
    try
    {
        const booking = await Booking.create(req.body);
        res.status(200).json({ booking: booking });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

module.exports = router;