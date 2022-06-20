import puppeteer from "puppeteer";
import mongoose from "mongoose";
import cpu_model from "../models/cpu.model";
import { StoreName, store_interface } from "../models/store.model";
import { getProductInfoFromGlobalData, getProductInfoFromPcComponentes, getProductInfoFromPCDiga } from "./utils";
import case_model from "../models/pccase.model";
import pc_case_model from "../models/pccase.model";
import ram_model from "../models/ram.model";
import motherboard_model from "../models/motherboard.model";
import psu_model from "../models/psu.model";
import gpu_model from "../models/gpu.model";


/*
    updateAllCpu()
    updateAllGpus()
    updateAllPsus()
    updateAllMotherboards()
    updateAllRam()
    updateAllPcCases()

        updateProductStoresInfo()
*/

async function updateProductStoresInfo(stores: store_interface[] | undefined) {
    if(!stores) {
        return [];
    }

    const updated_product_stores_info: store_interface[] = [];

    stores.forEach( async (product_store_info) => {
        // if the store does not sell this product, maintain the available info
        if( !product_store_info.store_sells) {
            updated_product_stores_info.push(product_store_info);
        }

        let updated_info: store_interface | null = null;
        switch(product_store_info.name) {
            case StoreName.GlobalData:
                updated_info = await getProductInfoFromGlobalData(product_store_info);
                updated_product_stores_info.push(updated_info);
                break;
            case StoreName.PcDiga:
                updated_info = await getProductInfoFromGlobalData(product_store_info);
                updated_product_stores_info.push(updated_info);
                break;
            case StoreName.PcComponentes:
                updated_info = await getProductInfoFromGlobalData(product_store_info);
                updated_product_stores_info.push(updated_info);
                break;
        }
    });

    return updated_product_stores_info;
}

export async function updateAllCpu() {

    const all_cpu = await cpu_model.find();

    all_cpu.forEach( async (cpu_document) => {

        console.info(`Updating CPU ${cpu_document.name}`);

        const product_stores: store_interface[] | undefined = cpu_document.stores;

        cpu_document.stores = await updateProductStoresInfo(product_stores);

        try {
            cpu_document.save();
            console.info(`Updated CPU ${cpu_document.name} successfully!`);
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    });
}


export async function updateAllPcCases() {

    const all_pc_cases = await pc_case_model.find();

    all_pc_cases.forEach( async (pc_case_document) => {

        console.info(`Updating CPU ${pc_case_document.name}`);

        const product_stores: store_interface[] | undefined = pc_case_document.stores;

        pc_case_document.stores = await updateProductStoresInfo(product_stores);

        try {
            pc_case_document.save();
            console.info(`Updated CPU ${pc_case_document.name} successfully!`);
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    });
}

export async function updateAllGpus() {

    const all_gpus = await gpu_model.find();

    all_gpus.forEach( async (gpu_document) => {

        console.info(`Updating CPU ${gpu_document.name}`);

        const product_stores: store_interface[] | undefined = gpu_document.stores;

        gpu_document.stores = await updateProductStoresInfo(product_stores);

        try {
            gpu_document.save();
            console.info(`Updated CPU ${gpu_document.name} successfully!`);
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    });
}

export async function updateAllPsus() {

    const all_psus = await psu_model.find();

    all_psus.forEach( async (psu_document) => {

        console.info(`Updating CPU ${psu_document.name}`);

        const product_stores: store_interface[] | undefined = psu_document.stores;

        psu_document.stores = await updateProductStoresInfo(product_stores);

        try {
            psu_document.save();
            console.info(`Updated CPU ${psu_document.name} successfully!`);
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    });
}


export async function updateAllMotherboards() {

    const all_motherboards = await motherboard_model.find();

    all_motherboards.forEach( async (motherboard_document) => {

        console.info(`Updating CPU ${motherboard_document.name}`);

        const product_stores: store_interface[] | undefined = motherboard_document.stores;

        motherboard_document.stores = await updateProductStoresInfo(product_stores);

        try {
            motherboard_document.save();
            console.info(`Updated CPU ${motherboard_document.name} successfully!`);
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    });
}


export async function updateAllRam() {

    const all_ram = await ram_model.find();

    all_ram.forEach( async (ram_document) => {

        console.info(`Updating CPU ${ram_document.name}`);

        const product_stores: store_interface[] | undefined = ram_document.stores;

        ram_document.stores = await updateProductStoresInfo(product_stores);

        try {
            ram_document.save();
            console.info(`Updated CPU ${ram_document.name} successfully!`);
        } catch (error: any) {
            console.error(error);
            throw new Error(error);
        }
    });
}
