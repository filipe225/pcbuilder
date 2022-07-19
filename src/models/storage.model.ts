import { Schema, model, Types} from 'mongoose';
import { StorageType } from '../utils/enums';
import { store_interface, store_schema } from './store.model';


export interface storage_interface {
    _id?: Types.ObjectId,
    name: string,
    type: StorageType,
    timings?: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const storage_schema = new Schema<storage_interface>(
    {
        name: { type: String, required: true },
        type: { type: String, enum: Object.values(StorageType), required: true, default: StorageType.SSD_M2 },
        timings: { type: String },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const storage = model('storage', storage_schema);

export default storage;