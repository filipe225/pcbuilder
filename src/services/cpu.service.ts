
import { Request, Response } from "express";
import { UpdateQuery, FilterQuery } from "mongoose";
import cpu_model, { cpu_interface } from "../models/cpu.model";

export async function createCpu(req: Request, res: Response) {
    try {
        const result = await cpu_model.create<cpu_interface>(res.locals.cpu);
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export async function updateCpu(req: Request, res: Response) {
    try {
        const cpu_name = req.params.db_name;

    } catch (error) {
        console.error(error);
        throw error;    
    }
}

export async function deleteCpu(req: Request, res: Response) {
    try {
        const cpu_name = req.params.db_name;
        const result = await cpu_model.deleteOne({ db_name: cpu_name });
        console.log(result);
        res.statusCode = 200;
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllCpus() {
    return cpu_model.find();
}

async function getFilteredCpus() {

}