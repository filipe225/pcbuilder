
import { Request, Response } from "express";
import { FilterQuery } from "mongoose";
import cpu_model, { cpu_interface } from "../models/cpu.model";

export function createCpu(req: Request, res: Response) {
    try {
        const result = cpu_model.create(req.body);
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

async function updateCpu() {

}

async function getAllCpus() {
    return cpu_model.find();
}

async function getFilteredCpus() {

}