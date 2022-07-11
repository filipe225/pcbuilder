
import { Types, Schema, model } from 'mongoose';
import { store_interface } from './store.model';

export interface motherboard_interface {
    _id?: Types.ObjectId,
    name: string,
    stores: store_interface[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const motherboard_schema = new Schema<motherboard_interface>({

});

const motherboard_model = model('motherboard', motherboard_schema);

export default motherboard_model;