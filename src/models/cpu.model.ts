
import { Schema, model } from 'mongoose';

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

export interface cpu_interface {
    name: string,
    manufacturer: Manufacturer,
    socket: Socket,
    cores: number,
    threads: number,
    base_frequency: string,
    max_frequency: string,
    cache: string,
    architecture: Architecture,
    integrated_gpu?: boolean,
    ram_technology: string,
    tdp: string,
    overclock_tutorial?: string,
    year_of_release?: Date,
}

const cpu_schema = new Schema<cpu_interface>(
    {
        name: { type: String, required: true },
        manufacturer: { type: String, enum: Object.values(Manufacturer), required: true },
        socket: { type: String, enum: Object.values(Socket), required: true },
        cores: { type: Number, required: true },
        threads: { type: Number , required: true},
        base_frequency: { type: String, required: true },
        max_frequency: { type: String, required: true },
        cache: { type: String, required: true },
        architecture: { type: String, enum: Object.values(Architecture), required: true},
        integrated_gpu: { type: Boolean, required: true, default: false },
        ram_technology: { type: String, required: true },
        tdp: { type: String, required: true },
        overclock_tutorial: { type: String, required: false, default: '' },
        year_of_release: { type: Date, required: false, default: '' }
    }, 
    { timestamps: true }
);

const cpu_model = model('cpu', cpu_schema);

export default cpu_model;