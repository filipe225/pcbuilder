import { Request, Response } from "express";
import psu_model from "../models/psu.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllPsus(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewPsu(req: Request, res: Response) {

}
export async function createPsu(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
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
        
    } catch (error: any) {
        throw new Error(error);
    }
}


