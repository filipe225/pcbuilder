
import { Types, Schema, model } from 'mongoose';
import { MotherboardCpuManufacturer } from '../utils/enums';
import { store_interface, store_schema } from './store.model';

export interface motherboard_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,
    abrev: string,
    identifier: string, // either its a B or a Z series
    manufacturer: MotherboardCpuManufacturer,

    images_url?: Types.Array<string> | string[],
    stores: store_interface[],

    createdAt?: Date | string,
    updatedAt?: Date | string
}

const motherboard_schema = new Schema<motherboard_interface>(
    {
        product_type: { type: String, required: true, default: 'motherboard' },
        name: { type: String, required: true },
        abrev: { type: String, required: true },
        identifier: { type: String, required: true },
        manufacturer: { type: String, enum: Object.values(MotherboardCpuManufacturer), required: true },
        images_url: { type: [String] },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const motherboard_model = model('motherboard', motherboard_schema);

export default motherboard_model;