const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: false },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    subscription_days:{type: Number, required: true},
    price_subscription:{type: Number, required: true},
    price_rental:{type: Number, required: true},
    booking_id:{type: Number, required: true},
    sub_car:[{type: mongoose.Schema.Types.ObjectId, ref: "car", required: true}],
    rent_car:[{type: mongoose.Schema.Types.ObjectId, ref: "car", required: true}]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("booking", bookingSchema);
