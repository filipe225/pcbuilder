import { Request, Response } from "express";
import storage_model, { storage_interface } from "../models/storage.model";
import { getProductById } from "./database.service";

export async function getAllStorages(req: Request, res: Response) {
    try {
        const all_storages = await storage_model.find();
        res.render('display_storages', { all_storages });
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewStorage(req: Request, res: Response) {
    res.render('add_storage', { } ); 
}
export async function createStorage(req: Request, res: Response) {
    try {
        const result = await storage_model.create<storage_interface>(res.locals.storage);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getStorageToUpdate(req: Request, res: Response) {
    try {
        const storage_id = req.params.id;
        const storage_info = await getProductById('storage', storage_id);

        res.render('update_storage', { storage_info });   

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
        const storage_id = req.params.id;
        const storage_info = await getProductById('storage', storage_id);
        res.render('delete_storage', { storage_info });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteStorage(req: Request, res: Response) {
    try {
        const storage_id = req.params.id;
        console.log('storage id delete :  ', storage_id);
        const result = await storage_model.findByIdAndDelete(storage_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


