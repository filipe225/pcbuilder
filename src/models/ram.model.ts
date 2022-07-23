
import { Types, Schema, model } from 'mongoose';
import { store_interface, store_schema } from './store.model';

export interface ram_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const ram_schema = new Schema<ram_interface>(
    {
        product_type: { type: String, required: true, default: 'ram' },
        name: { type: String, required: true },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const ram_model = model('ram', ram_schema);

export default ram_model;