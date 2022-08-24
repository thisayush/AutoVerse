const express = require("express");
const Car = require("../models/Car.model");

const router = express.Router();

// use http://localhost:4000/cars?location=Delhi-NCR to filter by city name


router.get("/", async (req, res) => {
    
    let obj = {};
   
    let { location, segment, name, fuel_type, transmission_type, brand, seating_capacity,gte,lte } = req.query;
    location ? obj.location = location : null;
    segment ? obj.segment = segment : null;
    name ? obj.name = name : null;
    fuel_type ? obj.fuel_type = fuel_type: null;
    transmission_type ? obj.transmission_type = transmission_type : null;
    brand ? obj.brand = brand : null;
    seating_capacity ? obj.seating_capacity = seating_capacity : null;
    let obj1 = {};
    if (gte && lte)
    {
        obj1 = {$and:[{subscribe_charge_per_month:{$lte:lte}},{subscribe_charge_per_month:{$gte:gte}}]}
    }

    try
    {
        const car = await Car.find(obj,obj1).lean().exec();
        res.status(200).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.get("/:id", async (req, res) => {
    try
    {
        const car = await Car.findById(req.params.id).lean().exec();
        res.status(200).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.patch("/:id", async (req, res) => {
    try
    {
        const car = await Car.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.delete("/:id", async (req, res) => {
    try
    {
        const car = await Car.findByIdAndDelete(req.params.id)
        res.status(201).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});


module.exports = router;
