
import { Types, Schema, model } from 'mongoose';
import { Architecture, CacheUnit, FrequencyUnit, Manufacturer, RamTechonology, Socket, TdpUnit } from '../utils/enums';
import { store_interface, store_schema } from './store.model';


export interface cpu_interface {
    _id?: Types.ObjectId,
    product_type: string,
    name: string,
    manufacturer: Manufacturer,

    socket?: Socket,
    cores?: number,
    threads?: number,

    base_frequency?: number,
    max_frequency?: number,
    frequency_unit?: FrequencyUnit

    cache?: number,
    cache_unit?: CacheUnit,

    architecture?: Architecture,
    integrated_gpu?: boolean,
    ram_technology?: RamTechonology,
    overclock_tutorial?: string,
    year_of_release?: Date,

    tdp?: number,
    tdp_unit?: TdpUnit,

    // could be Types.Array<store_interface> but it caused problems in the middlewares
    stores?: store_interface[],

    createdAt?: Date | string,
    updatedAt?: Date | string
}


const cpu_schema = new Schema<cpu_interface>(
    {
        product_type: { type: String, required: true, default: 'cpu' },
        name: { type: String, required: true },
        manufacturer: { type: String, enum: Object.values(Manufacturer), required: true },
        socket: { type: String, enum: Object.values(Socket), required: true },
        cores: { type: Number, required: true },
        threads: { type: Number , required: true},
        base_frequency: { type: Number, required: true },
        max_frequency: { type: Number, required: true },
        frequency_unit: { type: String, enum: Object.values(FrequencyUnit), required: true, default: FrequencyUnit.Ghz },
        cache: { type: Number, required: true },
        cache_unit: { type: String, enum: Object.values(CacheUnit), required: true, default: CacheUnit.Mb },
        architecture: { type: String, enum: Object.values(Architecture), required: true},
        integrated_gpu: { type: Boolean, required: true, default: false },
        ram_technology: { type: String, enum: Object.values(RamTechonology), required: true, default: RamTechonology.DDR5 },
        tdp: { type: Number, required: true },
        tdp_unit: { type: String, enum: Object.values(TdpUnit), required: true, default: TdpUnit.W },
        overclock_tutorial: { type: String, required: false, default: '' },
        year_of_release: { type: Date, required: false, default: '' },
        stores: [store_schema]
    }, 
    { timestamps: true }
);

const cpu_model = model('cpu', cpu_schema);

export default cpu_model;