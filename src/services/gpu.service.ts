import { Request, Response } from "express";
import gpu_model, { gpu_interface } from "../models/gpu.model";

export async function getAllGpu(req: Request, res: Response) {
    try {
        const all_gpus = await gpu_model.find();
        res.render('display_gpus', { all_gpus });

    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewGpu(req: Request, res: Response) {
    res.render('add_gpu', { } ); 
}

export async function createGpu(req: Request, res: Response) {
    try {
        const result = await gpu_model.create<gpu_interface>(res.locals.gpu);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getGpuToUpdate(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateGpu(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getGpuToDelete(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteGpu(req: Request, res: Response) {
    try {
        const gpu_id = req.params.id;
        console.log('gpu id delete :  ', gpu_id);
        const result = await gpu_model.findByIdAndDelete(gpu_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


