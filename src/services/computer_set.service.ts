import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import computer from '../models/computer.model';
import computer_set, { computer_set_interface } from "../models/computer_set.model";
import cooler_model from '../models/cooler.model';
import cpu_model from '../models/cpu.model';
import gpu_model from '../models/gpu.model';
import motherboard_model from '../models/motherboard.model';
import pc_case_model from '../models/pccase.model';
import psu_model from '../models/psu.model';
import ram_model from '../models/ram.model';


export async function getAllComputerSets(req: Request, res: Response) {
    try {
        const all_computer_sets = await computer_set.find();
        res.render('display_computer_sets', { all_computer_sets });
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function addNewComputerSet(req: Request, res: Response) {
    try {
        const computers = await computer.find({}, { _id: 1, name: 1, cpu_type: 1, description: 1 });

        res.render('add_computer_set', { computers });
        
    } catch (error: any) {
       throw new Error(error); 
    }
}

export async function createComputerSet(req: Request, res: Response) {
    try {
        const response = await computer_set.create<computer_set_interface>(res.locals.computer_set);
        console.log(response);
        res.statusCode = 200;
        res.render('form_submission', { response: JSON.stringify(response)});
    } catch (error: any) {
       throw new Error(error); 
    }
}

export async function getComputerSetToUpdate(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
       throw new Error(error); 
    }
}

export async function updateComputerSet(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
       throw new Error(error); 
    }
}

export async function getComputerSetToDelete(req: Request, res: Response) {
    try {
        
    } catch (error: any) {
       throw new Error(error); 
    }
}

export async function deleteComputerSet(req: Request, res: Response) {
    try {
        const computer_set_id = req.params.id;
        const response = await computer_set.findByIdAndDelete(computer_set_id);
        console.log(response);
        res.statusCode = 200;
        res.render('form_submission', { response }); 
    } catch (error: any) {
       throw new Error(error); 
    }
}


// API

export async function getAllComputerSetsApi(req: Request, res: Response) {
    try {
        const all_computer_sets = await computer_set.find().lean().exec();

        const updated_info = [];
        
        for( const set of all_computer_sets) {
            const clone_set = Object.assign({}, set, { computers: [] });
            const computer_ids = set.computers;

            for( const id of computer_ids) {

                const components_ids       = await computer.findById(id);
                const pc_case_info         = await pc_case_model.findById(components_ids!.pc_case);
                const motherboard_info     = await motherboard_model.findById(components_ids!.motherboard);
                const cpu_info             = await cpu_model.findById(components_ids!.cpu);
                const cooler_info          = await cooler_model.findById(components_ids!.cooler);
                const ram_info             = await ram_model.findById(components_ids!.ram);
                const gpu_info             = await gpu_model.findById(components_ids!.gpu);
                const psu_info             = await psu_model.findById(components_ids!.psu);

                clone_set.computers.push( [pc_case_info, motherboard_info, cpu_info, cooler_info, ram_info, gpu_info, psu_info] );
                console.log(clone_set);
            }

            updated_info.push(clone_set);
        }

        console.log("UPDATED INFO");
        //console.log(updated_info)

        res.send(updated_info);

    } catch (error: any) {
        throw new Error(error);
    }
}