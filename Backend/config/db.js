const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connect = () => {
    return mongoose.connect(`${process.env.MONGODB_LINK}`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology:true
    })
}

module.exports = connect;