import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { cooler_interface } from "../models/cooler.model";


export function coolerMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const cooler_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: cooler_body[store_name + '_store_sells'],
                price: cooler_body[store_name + '_price'],
                discount: cooler_body[store_name + '_discount'],
                availability: cooler_body[store_name + '_availability'],
                link: cooler_body[store_name + '_link']
            }
        )
    });

    const cooler: cooler_interface = {
        name: cooler_body.name,
        stores
    }

    // save to locals variable for next function to handle
    res.locals.cooler = cooler;

    next();
}