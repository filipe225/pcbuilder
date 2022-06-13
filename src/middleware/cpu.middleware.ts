import { Request, Response, NextFunction } from "express";
import { cpu_interface } from "../models/cpu.model";
import { StoreName, store_interface } from "../models/store.model";


export function CpuMiddlewareTransform(req: Request, res: Response, next: NextFunction) {
    
    const cpu_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                price: cpu_body[store_name + '_price'],
                discount: cpu_body[store_name + '_discount'],
                availability: cpu_body[store_name + '_availability'],
                link: cpu_body[store_name + '_link']
            }
        )
    });

    const cpu: cpu_interface = {
        db_name: cpu_body.db_name,
        name: cpu_body.name,
        architecture: cpu_body.architecture,
        base_frequency: cpu_body.base_frequency,
        max_frequency: cpu_body.max_frequency,
        frequency_unit: cpu_body.frequency_unit,
        cache: cpu_body.cache,
        cache_unit: cpu_body.cache_unit,
        cores: cpu_body.cores,
        threads: cpu_body.threads,
        integrated_gpu: cpu_body.integrated_gpu,
        manufacturer: cpu_body.manufacturer,
        overclock_tutorial: cpu_body.overclock_tutorial,
        ram_technology: cpu_body.ram_technology,
        socket: cpu_body.socket,
        tdp: cpu_body.tdp,
        tdp_unit: cpu_body.tdp_unit,
        year_of_release: cpu_body.year_of_release,
        stores: stores
    };

    // save to locals variable for next function to handle
    res.locals.cpu = cpu;

    next();

}