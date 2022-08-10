import { Request, Response, NextFunction } from 'express';
import computer, { computer_interface } from '../models/computer.model';
import computer_set, { computer_set_interface } from "../models/computer_set.model";


export function computerSetMiddlewareTransform(req: Request, res: Response, next: NextFunction) {
    
    const computer_set_body = req.body; 

    const computer_set: computer_set_interface = {  
        product_type: 'computer_set',      
        name: computer_set_body.name, 
        computers: computer_set_body.computers,
        description: computer_set_body.description
    };

    // save to locals variable for next function to handle
    res.locals.computer_set = computer_set;

    next();
}