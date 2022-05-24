import mongoose from "mongoose";
import { Schema, model, Model } from "mongoose"

export interface product_interface {
    type: string,
    name: string,
    description: string,
    price: number,
    currency?: string
    image_link?: string,
    store_link: string,
}


const product_schema = new Schema<product_interface>(
    {
        type: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        currency: { type: String, default: '€' },
        image_link: { type: String },
        store_link: { type: String, required: true }
    },
    { timestamps: true }
);

const Product: Model<product_interface> = model<product_interface>('Product', product_schema);

export default Product;