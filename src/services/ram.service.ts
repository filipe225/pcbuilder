import { Request, Response } from "express";
import ram_model from "../models/ram.model";
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

}
export async function createRam(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getRamToUpdate(req: Request, res: Response) {
    try {
        
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
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteRam(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}


