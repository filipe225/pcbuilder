import { Types, Schema, model } from 'mongoose';
import { CoolerType, Socket } from '../utils/enums';
import { store_interface, store_schema } from './store.model';

export interface cooler_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,
    abrev: string,
    type: CoolerType,
    socket: any[],

    images_url?: Types.Array<string> | string[],
    stores: store_interface[],

    createdAt?: Date | string,
    updatedAt?: Date | string
}

const cooler_schema = new Schema<cooler_interface>(
    {
        product_type: { type: String, required: true, default: 'cooler' },
        name: { type: String, required: true },
        abrev: { type: String, required: true },
        type: { type: String, enum: Object.values(CoolerType), required: true, default: CoolerType.AIR },
        socket: { type: [String], required: true},
        images_url: { type: [String] },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
)

const cooler_model = model('cooler', cooler_schema);
export default cooler_model;