import { Request, Response } from "express";
import motherboard_model from "../models/motherboard.model";
import { StoreName } from "../utils/enums";
import { getProductById } from "./database.service";

export async function getAllMotherboards(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export function addNewMotherboard(req: Request, res: Response) {

}
export async function createMotherboard(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getMotherboardToUpdate(req: Request, res: Response) {
    try {
        const all_motherboards = await motherboard_model.find();
        res.render('display_motherboards', { all_motherboards });
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
        
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteMotherboard(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
        throw new Error(error);
    }
}


