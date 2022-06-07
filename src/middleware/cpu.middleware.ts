import { Request, Response, NextFunction } from "express";
import { cpu_interface } from "../models/cpu.model";

export default function CpuMiddlewareTransform(req: Request, res: Response, next: NextFunction) {
      
    const cpu_body = req.body; 
    
    const cpu: cpu_interface = {
        name: cpu_body.name,
        architecture: cpu_body.architecture,
        base_frequency: cpu_body.base_frequency + ' Ghz',
        max_frequency: cpu_body.max_frequency + ' Ghz',
        cache: cpu_body.cache + ' mb',
        cores: cpu_body.cores,
        threads: cpu_body.threads,
        integrated_gpu: cpu_body.integrated_gpu,
        manufacturer: cpu_body.manufacturer,
        overclock_tutorial: cpu_body.overclock_tutorial,
        ram_technology: cpu_body.ram_technology,
        socket: cpu_body.socket,
        tdp: cpu_body.tdp + ' w',
        year_of_release: cpu_body.year_of_release
    };

    res.locals.cpu = cpu;

    next();

}