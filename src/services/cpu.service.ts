
import { Request, Response } from "express";
import cpu_model, { cpu_interface, Architecture, FrequencyUnit, Manufacturer, Socket, TdpUnit, CacheUnit } from '../models/cpu.model';
import { StoreName } from '../models/store.model';
import { getProductById } from "./database.service";

export async function getAllCpus(req: Request, res: Response) { 
    try {
        const cpus = await cpu_model.find();
        res.render('display_cpus', { cpus });
        
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
    res.render('add_cpu', { isToAddNew: true, manufacturer, socket, architecture, stores, frequency_unit, cache_unit, tdp_unit } ); 
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
    const cpu_id = req.params.id;
    const cpu_info = getProductById('cpu', cpu_id);
    res.render('update_cpu', { cpu_info });
}

export async function getCpuToDelete(req: Request, res: Response) {
    const cpu_id = req.params.id;
    const cpu_info = getProductById('cpu', cpu_id);

    res.render('delete_cpu', { cpu_info });
}

export async function updateCpu(req: Request, res: Response) {
    try {
        const cpu_name = req.params.db_name;

    } catch (error) {
        console.error(error);
        throw error;    
    }
}

export async function deleteCpu(req: Request, res: Response) {
    try {
        const cpu_name = req.params.db_name;
        const result = await cpu_model.deleteOne({ db_name: cpu_name });
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}