import { Request, Response, NextFunction } from "express";
import { computer_interface } from "../models/computer.model";


export function computerMiddlewareTransform(req: Request, res: Response, next: NextFunction) {
    
    const computer_body = req.body; 

    const computer: computer_interface = {
        product_type: 'computer',        
        name: computer_body.name,
        cpu_type: computer_body.cpu_type,
        cpu: computer_body.cpu,
        gpu: computer_body.gpu,
        motherboard: computer_body.motherboard,
        pc_case: computer_body.pc_case,
        psu: computer_body.psu,
        ram: computer_body.ram,
        cooler: computer_body.cooler ? computer_body.cooler : '',
        description: computer_body.description
    };

    // save to locals variable for next function to handle
    res.locals.computer = computer;

    next();

}