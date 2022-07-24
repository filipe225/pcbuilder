import { Request, Response } from "express";
import psu_model, { psu_interface } from "../models/psu.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllPsus(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewPsu(req: Request, res: Response) {
    res.render('add_psu', { } ); 
}
export async function createPsu(req: Request, res: Response) {
    try {
        const result = await psu_model.create<psu_interface>(res.locals.psu);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getPsuToUpdate(req: Request, res: Response) {
    try {
        const all_psus= await psu_model.find();
        res.render('display_psus', { all_psus});
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updatePsu(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getPsuToDelete(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deletePsu(req: Request, res: Response) {
    try {
        const psu_id = req.params.id;
        console.log('psu id delete :  ', psu_id);
        const result = await psu_model.findByIdAndDelete(psu_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


