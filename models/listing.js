
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://i.cdn.newsbytesapp.com/images/28755281716927168.jpeg",
    set: (v) =>
      v === ""
        ? "https://i.cdn.newsbytesapp.com/images/28755281716927168.jpeg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review",
    }
  ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
