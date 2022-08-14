
import { Types, Schema, model } from 'mongoose';
import { BUS, ClockSpeeedUnit, GpuManufacturer, PowerConsumptionUnit } from '../utils/enums';
import { store_interface, store_schema } from './store.model';

export interface gpu_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,
    abrev: string,
    identifier: string, // To be able to select all 3060 for example e.g 3060, 1650 super
    manufacturer: GpuManufacturer,

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

    images_url?: Types.Array<string> | string[],
    stores: store_interface[],

    createdAt?: Date | string,
    updatedAt?: Date | string
}

const gpu_schema = new Schema<gpu_interface>(
    {
        product_type: { type: String, required: true, default: 'gpu' },
        name: { type: String, required: true },
        abrev: { type: String, required: true },
        identifier: { type: String, required: true },
        manufacturer: { type: String, enum: Object.values(GpuManufacturer), required: true },
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
        images_url: { type: [String]},
        stores: { type: [store_schema] }    
    },
    { timestamps: true }
);

const gpu_model = model('gpu', gpu_schema);

export default gpu_model;