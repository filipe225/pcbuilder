import { Request, Response, NextFunction } from "express";
import { StoreName } from "../utils/enums";
import { store_interface } from "../models/store.model";
import { pc_case_interface } from "../models/pccase.model";


export function pc_caseMiddlewareTransform(req: Request, res: Response, next: NextFunction) {

    const pc_case_body = req.body; 

    const store_names: String[] = Object.values(StoreName);
    const stores: store_interface[] = [];

    store_names.forEach( (store_name: any) => {
        stores.push(
            {
                name: store_name,
                store_sells: pc_case_body[store_name + '_store_sells'],
                price: pc_case_body[store_name + '_price'],
                discount: pc_case_body[store_name + '_discount'],
                availability: pc_case_body[store_name + '_availability'],
                link: pc_case_body[store_name + '_link']
            }
        )
    });

    const pc_case: pc_case_interface = {
        name: pc_case_body.name,
        stores
    }

    // save to locals variable for next function to handle
    res.locals.cpu = pc_case;

    next();
}