const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
    try
    {
        const user = await User.find().lean().exec();
        res.status(200).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.get("/:id", async (req, res) => {
    try
    {
        const user = await User.findById(req.params.id).lean().exec();
        res.status(200).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.patch("/:id", async (req, res) => {
    try
    {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.delete("/:id", async (req, res) => {
    try
    {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json({ user: user });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});


module.exports = router;
