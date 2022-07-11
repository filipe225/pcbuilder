import puppeteer from 'puppeteer';
import { Availability, StoreName } from "../utils/enums";
import { store_interface } from '../models/store.model';

/* 
    FUNCTIONS ->
        getProductInfoFromGlobalData(link, product_id)
        getProductInfoFromPcDiga(link)
        getProductInfoFromPcComponents(link)
*/


const GlobalDataSelectors = {
    price: 'div.main-container div.ck-product-cta-box-inner div span.price span.price__amount',
    discount: '',
    availability: 'body > main > div.main-container > div.bg-white.pb-4.mb-4 > div:nth-child(2) > div > ck-product-cta-box > div > div.row > div:nth-child(1) > availability-product > span'
}

const PcDigaSelectors = {
    price: 'span[data-price-amount]',
    discount: '',
    availability: ''
}

const PcComponentesSelectors = {
    price: '',
    discount: '',
    availability: ''
}

export async function getProductInfoFromGlobalData(product_info: store_interface)  {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(product_info.link);

    const price_element: number = await page.$eval(GlobalDataSelectors.price, el => el ? parseFloat(el.textContent as string) : 0 );

    product_info.price = price_element;

    await browser.close();
    return product_info;
}

export async function getProductInfoFromPCDiga(product_info: store_interface)  {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(product_info.link);

    await browser.close();

    return product_info;
}

export async function getProductInfoFromPcComponentes(product_info: store_interface) {

}