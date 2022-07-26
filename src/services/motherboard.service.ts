import { Request, Response } from "express";
import motherboard_model, { motherboard_interface } from "../models/motherboard.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllMotherboards(req: Request, res: Response) {
    try {
        const all_motherboards = await motherboard_model.find();
        res.render('display_motherboards', { all_motherboards });

    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewMotherboard(req: Request, res: Response) {
    res.render('add_motherboard', { } ); 
}
export async function createMotherboard(req: Request, res: Response) {
    try {
        const result = await motherboard_model.create<motherboard_interface>(res.locals.motherboard);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMotherboardToUpdate(req: Request, res: Response) {
    try {
        const motherboard_id = req.params.id;
        const motherboard_info = await getProductById('motherboard', motherboard_id);

        res.render('update_motherboard', { motherboard_info });   

    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateMotherboard(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getMotherboardToDelete(req: Request, res: Response) {
    try {    
        const motherboard_id = req.params.id;
        const motherboard_info = await getProductById('motherboard', motherboard_id);
        res.render('delete_motherboard', { motherboard_info });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteMotherboard(req: Request, res: Response) {
    try {
        const motherboard_id = req.params.id;
        console.log('motherboard id delete :  ', motherboard_id);
        const result = await motherboard_model.findByIdAndDelete(motherboard_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


