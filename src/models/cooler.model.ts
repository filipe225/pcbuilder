import { Types, Schema, model } from 'mongoose';
import { store_interface, store_schema } from './store.model';

export interface cooler_interface {
    _id?: Types.ObjectId,
    name: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const cooler_schema = new Schema<cooler_interface>(
    {
        name: { type: String, required: true },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
)

const cooler_model = model('cooler', cooler_schema);
export default cooler_model;