const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&q=80&w=800&fit=crop&auto=format",
        set: (v) =>
          v === "  "
            ? "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&q=80&w=800&fit=crop&auto=format"
            : v,
      },
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing", listingSchema)
module.exports=Listing;