const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors")
const dotenv =require("dotenv")
require("colors")
dotenv.config()
const mongoose = require("mongoose");
const connectDB = require('./config/config')
connectDB()
// mongoose.connect("mongodb://0.0.0.0:27017/todoDB", {
//   useNewUrlParser: true,
// }).then(res => console.log(" connection done "))
// .catch(err => console.log("there is error "+ err ))

// const api = require("./server/routes/api");

// middlewars
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );

//   next();
// });

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))
// app.use("/", api);
app.get("/" , (req ,res )=>{
    res.send("my name is anas")
})

const port = process.env.PORT||8000;
app.listen(port, function () {
  console.log(`Server running on ${port}`.bgCyan);
});
