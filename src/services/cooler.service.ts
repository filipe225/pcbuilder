import { Request, Response } from "express";
import cooler_model, { cooler_interface } from "../models/cooler.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllCoolers(req: Request, res: Response) {
    try {
        const all_coolers = await cooler_model.find();
        res.render('display_coolers', { all_coolers });
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewCooler(req: Request, res: Response) {
    res.render('add_cooler', { } ); 
}
export async function createCooler(req: Request, res: Response) {
    try {
        console.log(res.locals.cooler);
        const result = await cooler_model.create<cooler_interface>(res.locals.cooler);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getCoolerToUpdate(req: Request, res: Response) {
    try {
        const cooler_id = req.params.id;
        const cooler_info = await getProductById('cooler', cooler_id);

        res.render('update_cooler', { cooler_info });   

    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateCooler(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getCoolerToDelete(req: Request, res: Response) {
    try {    
        const cooler_id = req.params.id;
        const cooler_info = await getProductById('cooler', cooler_id);
        res.render('delete_cooler', { cooler_info });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteCooler(req: Request, res: Response) {
    try {
        const cooler_id = req.params.id;
        console.log('cooler id delete :  ', cooler_id);
        const result = await cooler_model.findByIdAndDelete(cooler_id);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}


