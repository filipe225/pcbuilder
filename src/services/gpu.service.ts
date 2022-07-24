import { Request, Response } from "express";
import gpu_model from "../models/gpu.model";

export async function getAllGpu(req: Request, res: Response) {
    try {
        const all_gpus = await gpu_model.find();
        res.render('display_gpus', { all_gpus });

    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewGpu(req: Request, res: Response) {

}
export async function createGpu(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
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
        
    } catch (error: any) {
        throw new Error(error);
    }
}


