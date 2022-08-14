import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { ram_interface } from "../models/ram.model";


export function ramMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const ram_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: ram_body[store_name + '_store_sells'],
                price: ram_body[store_name + '_price'],
                discount: ram_body[store_name + '_discount'],
                availability: ram_body[store_name + '_availability'],
                link: ram_body[store_name + '_link']
            }
        )
    });

    const ram: ram_interface = {
        name: ram_body.name,
        abrev: ram_body.abrev,
        identifier: ram_body.identifier,
        brand: ram_body.brand,
        images_url: ram_body.images_url ? ram_body.images_url : [],
        stores
    }

    // save to locals variable for next function to handle
    res.locals.ram = ram;

    next();
}