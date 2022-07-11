import { Schema, model, Types } from 'mongoose';
import { CpuType } from '../utils/enums';
import { cooler_interface } from './cooler.model';
import { cpu_interface } from './cpu.model';
import { gpu_interface } from './gpu.model';
import { motherboard_interface } from './motherboard.model';
import { pc_case_interface } from './pccase.model';
import { psu_interface } from './psu.model';
import { ram_interface } from './ram.model';


export interface computer_interface {
    _id?: Types.ObjectId,
    cpu_type: CpuType,
    name: string,
    description: string,
    pccase: Types.ObjectId | pc_case_interface,
    motherboard: Types.ObjectId | motherboard_interface,
    cpu: Types.ObjectId | cpu_interface,
    gpu: Types.ObjectId | gpu_interface,
    ram: Types.ObjectId | ram_interface,
    psu: Types.ObjectId | psu_interface,
    cooler?: Types.ObjectId | cooler_interface,    
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const computer_schema = new Schema<computer_interface>(
    {
        cpu_type: { type: String, enum: Object.values(CpuType), required: true },
        name: { type: String, required: true },
        description: { type: String, default: '' },
        pccase: { type: Schema.Types.ObjectId, required: true },
        motherboard: { type: Schema.Types.ObjectId, required: true },
        cpu: { type: Schema.Types.ObjectId, required: true },
        gpu: { type: Schema.Types.ObjectId, required: true },
        ram: { type: Schema.Types.ObjectId, required: true },
        psu: { type: Schema.Types.ObjectId, required: true },
        cooler: { type: Schema.Types.ObjectId, required: false }
    },
    { timestamps: true } 
)

const computer = model('Computer', computer_schema);

export default computer;