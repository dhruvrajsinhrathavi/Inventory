const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes")


app.use("/api/product" , productRoutes);
app.use("/api/user",userRoutes);


module.exports = app;
