import { Schema, model, ObjectId } from 'mongoose';

export interface computer_interface {
    cpu_type: string,
    name: string,
    description: string,
    case: ObjectId,
    motherboard: ObjectId,
    processor: ObjectId,
    graphics_card: ObjectId,
    ram: ObjectId,
    fonte: ObjectId
}

const computer_schema = new Schema<computer_interface>(
    {
        cpu_type: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, default: '' },
        case: { type: Schema.Types.ObjectId, required: true },
        motherboard: { type: Schema.Types.ObjectId, required: true },
        processor: { type: Schema.Types.ObjectId, required: true },
        graphics_card: { type: Schema.Types.ObjectId, required: true },
        ram: { type: Schema.Types.ObjectId, required: true },
        fonte: { type: Schema.Types.ObjectId, required: true }
    },
    { timestamps: true } 
)

const Computer = model('Computer', computer_schema);

export default Computer;