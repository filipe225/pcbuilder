import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { storage_interface } from "../models/storage.model";


export function storageMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const storage_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: storage_body[store_name + '_store_sells'],
                price: storage_body[store_name + '_price'],
                discount: storage_body[store_name + '_discount'],
                availability: storage_body[store_name + '_availability'],
                link: storage_body[store_name + '_link']
            }
        )
    });

    const storage: storage_interface = {
        name: storage_body.name,
        type: storage_body.type,
        stores
    }

    // save to locals variable for next function to handle
    res.locals.storage = storage;

    next();
}