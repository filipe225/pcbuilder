import { model } from 'mongoose';
import Computer from "../models/computer.model";
import Product from '../models/product.model';
import User from '../models/user.model';

export let Computers: any = [];
export let Products: any = [];
export let Users: any = [];

function getRandomCumpter() {
    return new Computer({
        case: '',
        cpu_type: '',
        description: '',
        fonte: '',
        graphics_card: '',
        motherboard: '',
        name: '',
        processor: '',
        ram: ''
    });
}

function getRandomProduct() {
    return new Product({
        currency: '',
        description: '',
        image_link: '',
        name: '',
        price: '',
        store_link: '',
        type: ''
    })
}

function getRandomName() {

}

function getRandomNumber() {

}


Computers = [
    new Computer({
        ram: '2x8gb',
        processor: 'ryzen 5 3600',
        graphics_card: '6700xt',
        motherboard: 'aorus elite v2',
        case: 'mastercooler box 500',
        cpu_type: 'amd',
        description: 'Descrição teste',
        fonte: '650w'
    }),
    new Computer({
        ram: '2x8gb',
        processor: 'ryzen 5 3600',
        graphics_card: '6700xt',
        motherboard: 'aorus elite v2',
        case: 'mastercooler box 500',
        cpu_type: 'amd',
        description: 'Descrição teste',
        fonte: '650w'
    })
]