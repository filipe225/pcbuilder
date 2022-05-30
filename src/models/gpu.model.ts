
import { Schema, model } from 'mongoose';

export interface gpu_interface {

}

const gpu_schema = new Schema<gpu_interface>({

});

const gpu_model = model('cpu', gpu_schema);

export default gpu_model;