
import { Schema, model } from 'mongoose';

export interface ram_interface {

}

const ram_schema = new Schema<ram_interface>({

});

const ram_model = model('cpu', ram_schema);

export default ram_model;