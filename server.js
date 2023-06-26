const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const productContoller = require("./controllers/product-controller");
const categoryController = require("./controllers/category-controller");
// const unitContoller = require("./controllers/unit-controller");
const cartController = require("./controllers/cart-controller");

require("colors");
dotenv.config();
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(morgan("dev"));
const mongoose = require("mongoose");
const connectDB = require("./config/config");
connectDB();
// app.get("/name", (req, res) => {
//   res.send({ messgae: "He everyone" });
// });
app.use("/product", productContoller);
app.use("/category", categoryController);
// app.use("/unit", unitContoller);
app.use("/cart", cartController);

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server running on ${port}`.bgCyan);
});
