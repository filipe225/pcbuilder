import Computer from "../models/computer.model";
import cooler_model, { cooler_interface } from "../models/cooler.model";
import cpu_model, { cpu_interface } from "../models/cpu.model";
import gpu_model, { gpu_interface } from "../models/gpu.model";
import motherboard_model from "../models/motherboard.model";
import pc_case_model from "../models/pccase.model";
import psu_model, { psu_interface } from "../models/psu.model";
import ram_model from "../models/ram.model";
import storage_model, { storage_interface } from "../models/storage.model";
import { user_interface } from "../models/user.model";

export async function getProductById(collection: string, id: string) {
    try {
        switch(collection) {
            case 'cpu':
                const cpu = await cpu_model.findById(id);
                return cpu;
            case 'cooler':
                const cooler = await cooler_model.findById(id);
                return cooler;
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
            case 'pc_case':
                const pc_case = await pc_case_model.findById(id);
                return pc_case;
            case 'storage':
                const storage = await storage_model.findById(id);
                return storage;
            default:
                throw new Error('No such collection in getProductById()');
        }        
    } catch (error: any) {
        throw new Error(error);
    }

}

export async function saveProduct(collection: string, product: cpu_interface | gpu_interface | psu_interface) {
    try {
        let result: any = null;
        switch(collection) {
            case 'cpu':
                result = await cpu_model.create<cpu_interface>();
                return result;
            case 'cooler':
                result = await cooler_model.create<cooler_interface>();
                return result;
            case 'gpu':
                result = await gpu_model.create<cpu_interface>();
                return result;
            case 'psu':
                result = await psu_model.create<cpu_interface>();
                return result;
            case 'ram':
                result = await ram_model.create<cpu_interface>();
                return result;
            case 'motherboard':
                result = await motherboard_model.create<cpu_interface>();
                return result;
            case 'pccase':
                result = await pc_case_model.create<cpu_interface>();
                return result;
            case 'storage':
                result = await storage_model.create<storage_interface>();
                return result;
            default:
                throw new Error('No such collection');
        }       
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function registerUser(user: user_interface) {
    
}