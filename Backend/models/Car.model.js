const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    segment: { type: String, required: true },
    fuel_type: { type: String, required: true },
    transmission_type: { type: String, required: true },
    brand: { type: String, required: true },
    seating_capacity: { type: Number, required: true },
    subscribe_charge_per_month:{ type: Number, required: true },
    rental_charge_per_km:{ type: Number, required: true },
    image_url: [{ type: String, required: true }],
    location:{type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
});



module.exports = mongoose.model("car", carSchema);
