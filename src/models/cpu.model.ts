
import { Schema, model } from 'mongoose';

export interface cpu_interface {
    name: string,
    socket: string,
    cores: number,
    threads: number,
    base_frequency: string,
    max_frequency: string,
    cache: string,
    architecture: string,
    integrated_gpu?: boolean,
    ram_technology: string,
    tdp: string,
    overclock_tutorial?: string,
    year_of_release?: Date,
}

const cpu_schema = new Schema<cpu_interface>(
    {
        name: { type: String },
        socket: { type: String },
        cores: { type: Number },
        threads: { type: Number },
        base_frequency: { type: String },
        max_frequency: { type: String },
        cache: { type: String },
        architecture: { type: String },
        integrated_gpu: { type: String },
        ram_technology: { type: String },
        tdp: { type: String },
        overclock_tutorial: { type: String, required: false, default: '' },
        year_of_release: { type: Date, required: false, default: '' }
    }, 
    { timestamps: true }
);

const cpu_model = model('cpu', cpu_schema);

export default cpu_model;