import { Request, Response } from "express";
import ram_model, { ram_interface } from "../models/ram.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllRams(req: Request, res: Response) {
    try {
        const all_rams = await ram_model.find();
        res.render('display_rams', { all_rams });
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewRam(req: Request, res: Response) {
    res.render('add_ram', { } ); 
}
export async function createRam(req: Request, res: Response) {
    try {
        const result = await ram_model.create<ram_interface>(res.locals.ram);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getRamToUpdate(req: Request, res: Response) {
    try {
        const ram_id = req.params.id;
        const ram_info = await getProductById('ram', ram_id);

        res.render('update_ram', { ram_info });   

    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateRam(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getRamToDelete(req: Request, res: Response) {
    try {    
        const ram_id = req.params.id;
        const ram_info = await getProductById('ram', ram_id);
        res.render('delete_ram', { ram_info });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteRam(req: Request, res: Response) {
    try {
        const ram_id = req.params.id;
        console.log('ram id delete :  ', ram_id);
        const result = await ram_model.findByIdAndDelete(ram_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


