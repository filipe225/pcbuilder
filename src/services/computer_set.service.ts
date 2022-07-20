import { Request, Response, NextFunction } from 'express';
import computer_set from "../models/computer_set.model";


export async function getAllComputerSets(req: Request, res: Response) {
    try {
        const computer_sets = await computer_set.find();
        res.statusCode = 200;
        res.send(computer_sets);
        
    } catch (error: any) {
        throw new Error(error);
    }
}