import { Request, Response } from "express";
import pc_case_model, { pc_case_interface } from "../models/pccase.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllPcCases(req: Request, res: Response) {
    try {
        const all_pccases = await pc_case_model.find();
        res.render('display_pccases', { all_pccases });
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewPcCase(req: Request, res: Response) {
    res.render('add_pccase', { } ); 
}
export async function createPcCase(req: Request, res: Response) {
    try {
        const result = await pc_case_model.create<pc_case_interface>(res.locals.pc_case);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getPcCaseToUpdate(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updatePcCase(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getPcCaseToDelete(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deletePcCase(req: Request, res: Response) {
    try {
        const pc_case_id = req.params.id;
        console.log('pc_case id delete :  ', pc_case_id);
        const result = await pc_case_model.findByIdAndDelete(pc_case_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


