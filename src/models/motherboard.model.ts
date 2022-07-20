
import { Types, Schema, model } from 'mongoose';
import { store_interface, store_schema } from './store.model';

export interface motherboard_interface {
    _id?: Types.ObjectId,
    product_type: string,
    name: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const motherboard_schema = new Schema<motherboard_interface>(
    {
        product_type: { type: String, required: true, default: 'motherboard' },
        name: { type: String, required: true },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const motherboard_model = model('motherboard', motherboard_schema);

export default motherboard_model;