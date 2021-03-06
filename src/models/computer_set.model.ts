import { Schema, model, Types } from 'mongoose';
import { computer_interface, computer_schema } from './computer.model';

export interface computer_set_interface {
    _id?: Types.ObjectId,
    name: string,
    computers: Types.Array<computer_interface> | [],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

export const computer_set_schema = new Schema<computer_set_interface>( 
    {
        name: { type: String, required: true },
        computers: [computer_schema]
    },
    {
        timestamps: true
    }
)

const computer_set = model('computer_set', computer_set_schema);
export default computer_set;