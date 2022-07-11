import { Types, model, Schema } from "mongoose"
import { Availability, StoreName } from "../utils/enums";


export interface store_interface {
    _id?: Types.ObjectId,
    name: keyof typeof StoreName,
    store_sells: Boolean,
    price: number,
    discount: number,
    availability: Availability,
    link: string,
    createdAt?: Date | string,
    updatedAt?: Date | string
}

export const store_schema = new Schema<store_interface>(
    {
        name: { type: String, enum: Object.values(StoreName), required: true },
        store_sells: { type: Boolean, required: true, default: true },
        price: { type: Number, required: true, default: 0 },
        discount: { type: Number, required: true, default: 0 },
        availability: { type: String, enum: Object.values(Availability), required: true, default: Availability.disponivel },
        link: { type: String, required: true, default: '' }
    }
);

const store_model = model('store', store_schema);

export default store_model;