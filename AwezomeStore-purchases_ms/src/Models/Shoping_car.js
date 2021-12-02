const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema(
  {
    id_User: {type: String, required: true },
    Value: { type: Number, default: 0 },
    Total_products: { type: Number, default: 0},
    Products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Shoping_car", Product);