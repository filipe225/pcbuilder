
import { Types, Schema, model } from 'mongoose';
import { BUS, ClockSpeeedUnit, PowerConsumptionUnit } from '../utils/enums';
import { store_interface, store_schema } from './store.model';

export interface gpu_interface {
    _id?: Types.ObjectId,
    name: string,

    bus?: BUS,
    video_memory?: string,
    cuda_cores?: number,
    multi_screen_support?: string,
    interface?: Types.Array<string>,
    dimensions?: string,

    clock_speed?: string,
    clock_speed_unit?: ClockSpeeedUnit,

    memory_speed?: string,
    memory_interface?: string,

    power_consumption?: number,
    power_comsumption_unit?: PowerConsumptionUnit,

    stores: store_interface[],

    createdAt?: Date | string,
    updatedAt?: Date | string
}

const gpu_schema = new Schema<gpu_interface>(
    {
        name: { type: String, required: true },
        bus: { type: String, enum: Object.values(BUS), required: true, default: BUS.Gen_4 },
        video_memory: { type: String },
        clock_speed: { type: String },
        clock_speed_unit: { type: String, enum: Object.values(ClockSpeeedUnit), required: true, default: ClockSpeeedUnit.MHz },
        cuda_cores: { type: Number },
        memory_speed: { type: String },
        memory_interface: { type: String },
        multi_screen_support: { type: String },
        interface: { type: [String] },
        power_consumption: { type: Number },
        power_comsumption_unit: { type: String, enum: Object.values(PowerConsumptionUnit), required: true, default: PowerConsumptionUnit.W },
        dimensions: { type: String },
        stores: { type: [store_schema] }    
    },
    { timestamps: true }
);

const gpu_model = model('gpu', gpu_schema);

export default gpu_model;