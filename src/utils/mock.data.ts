import { model } from 'mongoose';
import Computer from "../models/computer.model";

export let Computers: any = [];
export let Products: any = [];
export let Users: any = [];


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