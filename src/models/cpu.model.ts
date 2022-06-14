
import { Types, Schema, model } from 'mongoose';
import { store_interface, store_schema } from './store.model';

export enum Manufacturer {
    AMD = 'AMD',
    INTEL = 'INTEL'
}

export enum Architecture {
    ZEN2 = 'ZEN2',
    ZEN3 = 'ZEN3',
    ZEN4 = 'ZEN4'
}

export enum Socket {
    AM4 = 'AM4',
    AM5 = 'AM5',
    LGA = 'LGA'
}

export enum FrequencyUnit {
    Ghz = 'Ghz'
}

export enum TdpUnit {
    W = 'W'
}

export enum CacheUnit {
    Mb = 'Mb'
}


// TODO
// CHANGE CACHE TO ARRAY OF STRINGS 
export interface cpu_interface {
    _id?: Types.ObjectId,
    name: string,
    manufacturer: Manufacturer,
    socket: Socket,
    cores: number,
    threads: number,
    base_frequency: number,
    max_frequency: number,
    frequency_unit: FrequencyUnit
    cache: number,
    cache_unit: CacheUnit,
    architecture: Architecture,
    integrated_gpu: boolean,
    ram_technology: string,
    tdp: number,
    tdp_unit: TdpUnit,
    overclock_tutorial?: string,
    year_of_release?: Date,
    stores?: store_interface[],
    created_at?: Date,
    updated_at?: Date
}


const cpu_schema = new Schema<cpu_interface>(
    {
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
        ram_technology: { type: String, required: true },
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