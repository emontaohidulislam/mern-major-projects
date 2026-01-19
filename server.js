const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/foodiezpro");

const Order = mongoose.model("Order", new mongoose.Schema({
  items: Array,
  total: Number,
  status: { type: String, default: "Preparing" }
}));

app.post("/api/order", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send("Order Placed Successfully");
});

app.listen(5001, () => console.log("Foodiez Pro Backend Running"));
