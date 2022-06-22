
import { Types, Schema, model } from 'mongoose';
import { store_interface } from './store.model';

export interface gpu_interface {
    _id?: Types.ObjectId,
    name: string,
    stores: store_interface[]
}

const gpu_schema = new Schema<gpu_interface>({

});

const gpu_model = model('gpu', gpu_schema);

export default gpu_model;