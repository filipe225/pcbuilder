import { Request, Response } from "express";
import storage_model from "../models/storage.model";

export async function getAllStorages(req: Request, res: Response) {
    try {
        const all_storages = await storage_model.find();
        res.render('display_storages', { all_storages });
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewStorage(req: Request, res: Response) {

}
export async function createStorage(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getStorageToUpdate(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateStorage(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getStorageToDelete(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteStorage(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}


