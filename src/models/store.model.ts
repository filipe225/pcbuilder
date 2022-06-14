import { model, Schema } from "mongoose"


export enum StoreName {
    GlobalData = 'GlobalData',
    PcDiga = 'PcDiga',
    PcComponentes = 'PcComponentes'
}

export enum Availability {
    disponivel = 'Disponível',
    por_ecomenda = 'Por Ecomenda',
    transito = 'Em Transito',
    esgotado = 'Esgotado'    
}

export interface store_interface {
    name: keyof typeof StoreName,
    price: number,
    discount: number,
    availability: Availability,
    link: string
}

export const store_schema = new Schema<store_interface>(
    {
        name: { type: String, enum: Object.values(StoreName), required: true },
        price: { type: Number, required: true, default: 0 },
        discount: { type: Number, required: true, default: 0 },
        availability: { type: String, enum: Object.values(Availability), required: true, default: Availability.disponivel },
        link: { type: String, required: true, default: '' }
    }
);

const store_model = model('store', store_schema);

export default store_model;