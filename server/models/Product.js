import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}); 

const Product = mongoose.model("Product", productSchema);

export default Product
