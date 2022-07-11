import { Request, Response, NextFunction } from "express";
import computer, { computer_interface } from "../models/computer.model";
import cooler_model, { cooler_interface } from "../models/cooler.model";
import cpu_model, { cpu_interface } from "../models/cpu.model";
import gpu_model, { gpu_interface } from "../models/gpu.model";
import motherboard_model, { motherboard_interface } from "../models/motherboard.model";
import pc_case_model, { pc_case_interface } from "../models/pccase.model";
import psu_model, { psu_interface } from "../models/psu.model";
import ram_model, { ram_interface } from "../models/ram.model";
import { Computers } from "../utils/mock.data";

export async function getAllComputers(req: Request, res: Response) {
    try {
        const result = await computer.find();
        res.status(200).send(result);
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getComputerById(req: Request, res: Response) {
    try {
        const computer_id = req.params.id;
        const computer_info: computer_interface = await computer.findById(computer_id) as computer_interface;

        let all_computer_parts: computer_interface = {
            _id: computer_info._id,
            cpu_type: computer_info.cpu_type,
            name: computer_info.name,
            description: computer_info.description,
            cpu: await cpu_model.findById(computer_info.cpu) as cpu_interface,
            gpu: await gpu_model.findById(computer_info.gpu) as gpu_interface,
            motherboard: await motherboard_model.findById(computer_info.motherboard) as motherboard_interface,
            pccase: await pc_case_model.findById(computer_info.pccase) as pc_case_interface,
            psu: await psu_model.findById(computer_info.psu) as psu_interface,
            ram: await ram_model.findById(computer_info.ram) as ram_interface,
            cooler: computer_info.cooler ? (await cooler_model.findById(computer_info.cooler) as cooler_interface) : undefined
        }

        console.log('COMPUTER PARTS : ', all_computer_parts);
        
        res.status(200).send(all_computer_parts);
    } catch (error: any) {
        throw new Error(error);
    }
}

export function getMockData(req: Request, res: Response) {
    res.json(Computers);
}