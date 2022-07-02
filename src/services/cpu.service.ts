
import { Request, Response } from "express";
import cpu_model, { cpu_interface, Architecture, FrequencyUnit, Manufacturer, Socket, TdpUnit, CacheUnit, RamTechonology } from '../models/cpu.model';
import { StoreName } from '../models/store.model';
import { getProductById } from "./database.service";

export async function getAllCpu(req: Request, res: Response) { 
    try {
        const all_cpus = await cpu_model.find();
        res.render('display_cpus', { all_cpus });
        
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}

export function addNewCpu(req: Request, res: Response) {
    const manufacturer = Object.values(Manufacturer);
    const socket = Object.values(Socket);
    const architecture = Object.values(Architecture);
    const stores = Object.values(StoreName);
    const frequency_unit = Object.values(FrequencyUnit);
    const cache_unit = Object.values(CacheUnit);
    const tdp_unit = Object.values(TdpUnit);
    const ram_technology = Object.values(RamTechonology);
    res.render('add_cpu', { manufacturer, socket, architecture, stores, frequency_unit, cache_unit, tdp_unit, ram_technology } ); 
}

export async function createCpu(req: Request, res: Response) {
    try {
        const result = await cpu_model.create<cpu_interface>(res.locals.cpu);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getCpuToUpdate(req: Request, res: Response) {
    try {
        const cpu_id = req.params.id;
        const cpu_info = await getProductById('cpu', cpu_id);
        const manufacturer = Object.values(Manufacturer);
        const socket = Object.values(Socket);
        const architecture = Object.values(Architecture);
        const stores = Object.values(StoreName);
        const frequency_unit = Object.values(FrequencyUnit);
        const cache_unit = Object.values(CacheUnit);
        const tdp_unit = Object.values(TdpUnit);
        const ram_technology = Object.values(RamTechonology);

        res.render('update_cpu', { cpu_info, manufacturer, socket, architecture, stores, frequency_unit, cache_unit, tdp_unit, ram_technology });   

    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateCpu(req: Request, res: Response) {
    try {
        const updated_cpu = res.locals.cpu;
        const result = await cpu_model.findByIdAndUpdate(req.params.id, updated_cpu, { new: true });
        res.statusCode = 200;
        res.send(result);
    } catch (error) {
        console.error(error);
        throw error;    
    }
}

export async function getCpuToDelete(req: Request, res: Response) {
    const cpu_id = req.params.id;
    console.log('cpu id:', cpu_id);
    try {
        const cpu_info = await getProductById('cpu', cpu_id);
        res.render('delete_cpu', { cpu_info });
    } catch (error: any) {
        throw new Error(error);
    }

}

export async function deleteCpu(req: Request, res: Response) {
    try {
        const cpu_id = req.params.id;
        console.log('cpu id delete :  ', cpu_id);
        const result = await cpu_model.findByIdAndDelete(cpu_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}