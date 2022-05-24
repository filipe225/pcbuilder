import puppeteer from 'puppeteer'
import { HydratedDocument } from 'mongoose'
import Product, { product_interface } from '../models/product.model'


/* 
    FUNCTIONS ->
        getProductInfoFromGlobalData(link)
        getProductInfoFromPCDiga(link)
*/

export async function getProductInfoFromGlobalData(link: string)  {
    

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);
    //TODO

    const product: product_interface = {
            currency: "",
            description: "",
            name: "",
            type: "",
            image_link: "",
            price: 0,
            store_link: link
        };
  
    await browser.close();
    return {}
}

export async function getProductInfoFromPCDiga(link: string)  {
    
    return {}
}