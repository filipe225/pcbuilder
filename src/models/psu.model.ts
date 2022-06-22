
import { Types, Schema, model } from 'mongoose';
import { store_interface } from './store.model';

export interface psu_interface {
    _id?: Types.ObjectId,
    name: string,
    stores: store_interface[]
}

const psu_schema = new Schema<psu_interface>({

});

const psu_model = model('psu', psu_schema);

export default psu_model;