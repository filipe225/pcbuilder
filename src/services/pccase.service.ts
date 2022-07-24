import { Request, Response } from "express";
import pc_case_model from "../models/pccase.model";
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

}
export async function createPcCase(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
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
        
    } catch (error: any) {
        throw new Error(error);
    }
}


