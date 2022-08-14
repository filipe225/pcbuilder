
import { Types, Schema, model } from 'mongoose';
import { EnergyEfficiency, PowerConsumptionUnit, PsuModularType, PsuType } from '../utils/enums';
import { store_interface, store_schema } from './store.model';

export interface psu_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,
    abrev: string,
    identifier: string,
    brand: string,

    maximum_power: number,
    maximum_power_unit: PowerConsumptionUnit,

    type: PsuType,
    modular: PsuModularType,
    energy_efficiency: EnergyEfficiency,

    images_url?: Types.Array<string> | string[],
    stores: store_interface[],

    createdAt?: Date | string,
    updatedAt?: Date | string
}

const psu_schema = new Schema<psu_interface>(
    {
        product_type: { type: String, required: true, default: 'psu' },
        name: { type: String, required: true },
        abrev: { type: String, required: true },
        identifier: { type: String, required: true },
        brand: { type: String, required: true },
        maximum_power: { type: Number, required: true },
        maximum_power_unit: { type: String, enum: Object.values(PowerConsumptionUnit), required: true, default: PowerConsumptionUnit.W },
        type: { type: String, enum: Object.values(PsuType), required: true, default: PsuType.ATX },
        modular: { type: String, enum: Object.values(PsuModularType), required: true, default: PsuModularType.NON_MODULAR },
        energy_efficiency: { type: String, enum: Object.values(EnergyEfficiency), required: true, default: EnergyEfficiency.plus_80 },
        images_url: { type: [String] },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const psu_model = model('psu', psu_schema);

export default psu_model;