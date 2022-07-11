import { Schema, model, Types} from 'mongoose';
import { StorageType } from '../utils/enums';


export interface storage_interface {
    _id?: Types.ObjectId,
    name: string,
    type: StorageType,
    timings?: string,
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const storage_schema = new Schema<storage_interface>(
    {
        name: { type: String, required: true },
        type: { type: String, enum: Object.values(StorageType), required: true, default: StorageType.SSD_M2 },
        timings: { type: String }
    },
    { timestamps: true }
);

const storage = model('storage', storage_schema);

export default storage;