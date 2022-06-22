
import { Types, Schema, model } from 'mongoose';
import { store_interface } from './store.model';

export interface ram_interface {
    _id?: Types.ObjectId,
    name: string,
    stores: store_interface[]
}

const ram_schema = new Schema<ram_interface>({

});

const ram_model = model('ram', ram_schema);

export default ram_model;