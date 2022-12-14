const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: false },
    password: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});


userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next()
    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    })
})

userSchema.methods.matchPassword = function (password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err,same) => {
            if (err) return reject(err)
            return resolve(same)
        })
    })
}

module.exports = mongoose.model("user", userSchema);
