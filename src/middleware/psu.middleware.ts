import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { psu_interface } from "../models/psu.model";


export function psuMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const psu_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: psu_body[store_name + '_store_sells'],
                price: psu_body[store_name + '_price'],
                discount: psu_body[store_name + '_discount'],
                availability: psu_body[store_name + '_availability'],
                link: psu_body[store_name + '_link']
            }
        )
    });

    const psu: psu_interface = {
        name: psu_body.name,
        stores
    }

    // save to locals variable for next function to handle
    res.locals.cpu = psu;

    next();
}