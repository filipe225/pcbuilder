
import { Types, Schema, model } from 'mongoose';
import { store_interface, store_schema } from './store.model';

export interface psu_interface {
    _id?: Types.ObjectId,
    name: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const psu_schema = new Schema<psu_interface>(
    {
        name: { type: String, required: true },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const psu_model = model('psu', psu_schema);

export default psu_model;