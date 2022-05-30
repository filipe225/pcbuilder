
import { Schema, model } from 'mongoose';

export interface motherboard_interface {

}

const motherboard_schema = new Schema<motherboard_interface>({

});

const motherboard_model = model('cpu', motherboard_schema);

export default motherboard_model;