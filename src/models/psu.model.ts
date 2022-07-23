
import { Types, Schema, model } from 'mongoose';
import { store_interface, store_schema } from './store.model';

export interface psu_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const psu_schema = new Schema<psu_interface>(
    {
        product_type: { type: String, required: true, default: 'psu' },
        name: { type: String, required: true },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const psu_model = model('psu', psu_schema);

export default psu_model;