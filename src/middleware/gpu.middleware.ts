import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { gpu_interface } from "../models/gpu.model";


export function gpuMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const gpu_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: gpu_body[store_name + '_store_sells'],
                price: gpu_body[store_name + '_price'],
                discount: gpu_body[store_name + '_discount'],
                availability: gpu_body[store_name + '_availability'],
                link: gpu_body[store_name + '_link']
            }
        )
    });

    const gpu: gpu_interface = {
        name: gpu_body.name,
        stores
    }

    // save to locals variable for next function to handle
    res.locals.gpu = gpu;

    next();
}