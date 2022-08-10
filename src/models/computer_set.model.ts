import { Schema, model, Types } from 'mongoose';
import { computer_interface, computer_schema } from './computer.model';

export interface computer_set_interface {
    _id?: Types.ObjectId,
    product_type: 'computer_set',
    name: string,
    computers: Types.Array<computer_interface> | any[],
    description: string,

    createdAt?: Date | string,
    updatedAt?: Date | string
}

export const computer_set_schema = new Schema<computer_set_interface>( 
    {
        product_type: { type: String, required: true, default: 'computer_set'},
        name: { type: String, required: true },
        computers: { type: [String], required: true },
        description: { type: String, required: true, default: '' }
    },
    {
        timestamps: true
    }
)

const computer_set = model('computer_set', computer_set_schema);
export default computer_set;