import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { motherboard_interface } from "../models/motherboard.model";


export function motherboardMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const motherboard_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: motherboard_body[store_name + '_store_sells'],
                price: motherboard_body[store_name + '_price'],
                discount: motherboard_body[store_name + '_discount'],
                availability: motherboard_body[store_name + '_availability'],
                link: motherboard_body[store_name + '_link']
            }
        )
    });

    const motherboard: motherboard_interface = {
        name: motherboard_body.name,
        stores
    }

    // save to locals variable for next function to handle
    res.locals.cpu = motherboard;

    next();
}