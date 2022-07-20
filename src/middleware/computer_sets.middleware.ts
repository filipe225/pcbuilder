import { Request, Response, NextFunction } from 'express';
import { computer_interface } from '../models/computer.model';
import { computer_set_interface } from "../models/computer_set.model";


export function computerSetsMiddlewareTransform(req: Request, res: Response, next: NextFunction) {
    const computer_set_body = req.body; 

    const computer_set: computer_set_interface = {        
        name: computer_set_body.name, 
        computers: []
    };

    // save to locals variable for next function to handle
    res.locals.computer_set = computer_set;

    next();
}