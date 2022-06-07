import mongoose, { model, Schema } from "mongoose"
import cpu_model from "./cpu.model";

export enum StoreName {
    GlobalData = 'GlobalData',
    PcDiga = 'PcDiga',
    PcComponents = 'PcComponents'
}

export interface store_interface {
    name: StoreName,
    price: number,
    link: string
}

export const store_schema = new Schema<store_interface>(
    {
        name: { type: String, enum: Object.values(StoreName), required: true },
        price: { type: Number, required: true, default: 0 },
        link: { type: String, required: true, default: '' }
    }
);

const store_model = model('store', store_schema);

export default store_model;