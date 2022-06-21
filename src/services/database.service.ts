import cpu_model from "../models/cpu.model";
import gpu_model from "../models/gpu.model";
import motherboard_model from "../models/motherboard.model";
import pc_case_model from "../models/pccase.model";
import psu_model from "../models/psu.model";
import ram_model from "../models/ram.model";

export async function getProductById(collection: string, id: string) {
    switch(collection) {
        case 'cpu':
            const cpu = await cpu_model.findById(id);
            return cpu;
        case 'gpu':
            const gpu = await gpu_model.findById(id);
            return gpu;
        case 'psu':
            const psu = await psu_model.findById(id);
            return psu;
        case 'ram':
            const ram = await ram_model.findById(id);
            return ram;
        case 'motherboard':
            const motherboard = await motherboard_model.findById(id);
            return motherboard;
        case 'pccase':
            const pccase = await pc_case_model.findById(id);
            return pccase;
        default:
            throw new Error('No such collection');
    }
}