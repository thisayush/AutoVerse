const app= require("./index");
const connect = require("../config/db");

app.listen(4000, async (req,res) => {
    await connect();
    console.log("hii 4000")
})