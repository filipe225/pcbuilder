import { Request, Response } from "express";
import cooler_model from "../models/cooler.model";
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

}
export async function createCooler(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getCoolerToUpdate(req: Request, res: Response) {
    try {
        
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
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteCooler(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}


