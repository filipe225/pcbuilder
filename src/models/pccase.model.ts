
import { Schema, model } from 'mongoose';

export interface case_interface {

}

const case_schema = new Schema<case_interface>({

});

const case_model = model('cpu', case_schema);

export default case_model;