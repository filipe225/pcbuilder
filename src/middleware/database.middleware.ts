import mongoose from "mongoose";
import Computer from "../models/computer.model";
import Product from "../models/product.model";
import User from "../models/user.model";


function getComputers() {
    return Computer.find().then( (results) => {
        console.log(results);
    }).catch( error => console.log(error));
}

function getProducts() {

}

function getProductsByType(type: string) {

}