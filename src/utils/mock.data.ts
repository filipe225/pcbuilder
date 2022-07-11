import { model } from 'mongoose';
import Computer from "../models/computer.model";
import { computer_set_interface } from '../models/computer_set.model';
import { cpu_interface } from '../models/cpu.model';
import Product from '../models/product.model';
import { CpuType, Manufacturer } from './enums';


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


export const Computers: any = {
    _id: 'computer__01',
    name: 'Computador de Entrada',
    computers: [
        {
            cpu_type: CpuType.AMD,
            cpu: { name: 'ryzen 5 3600' },
            psu: { name: 'rm 800 W' },
            gpu: { name: 'nvidia 3060TI' },
            motherboard: { name: 'b450 aorus elite v2' },
            pccase: { name: 'lian li dynamic o11' },
            ram: { name: 'gskill 3600Mhz 2x8GB' },
            storage: { name: 'samsung 500gb ssd m.2' }
        },
        {
            cpu_type: CpuType.Intel,
            cpu: { name: 'i3 12100' },
            psu: { name: 'rm 800 W' },
            gpu: { name: 'nvidia 3060TI' },
            motherboard: { name: 'z490 aorus elite v2' },
            pccase: { name: 'lian li dynamic o11' },
            ram: { name: 'gskill 3600Mhz 2x8GB' },
            storage: { name: 'samsung 500gb ssd m.2' }
        }
    ],
    createdAt: new Date().getDate().toLocaleString(),
    updatedAt: Date.now().toLocaleString()
}