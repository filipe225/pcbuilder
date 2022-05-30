
import { Schema, model } from 'mongoose';

export interface psu_interface {

}

const psu_schema = new Schema<psu_interface>({

});

const psu_model = model('cpu', psu_schema);

export default psu_model;