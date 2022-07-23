
import { Types, Schema, model } from 'mongoose';
import { Motherboard_PSU_Support } from '../utils/enums';
import { store_interface, store_schema } from './store.model';


export interface pc_case_interface {
    _id?: Types.ObjectId,
    product_type?: string,
    name: string,

    case_form_factor?: string
    motherboard_form_factor?: Motherboard_PSU_Support,
    Colour?: string,	
    Chassis_Construction_Materials?: string,
    Dimensions?: string,
    Weight?: number,

    Fan_Bays?: string,
    Fans_Included?: string,

    PSU_Support?: Motherboard_PSU_Support,
    Max_PSU_Length?: number,

    Max_CPU_Cooler_Height?: number,
    Max_GPU_Card_Length?: number,

    Front_Side_Top_Panel_IO?: string[],	
    Drive_Bays?: string[],
    Standard_Expansion_Slots?: number,
    Vertical_Expansion_Slots?: number,

    stores: store_interface[],
    
    createdAt?: Date | string,
    updatedAt?: Date | string
}

const pc_case_schema = new Schema<pc_case_interface>(
    {
        product_type: { type: String, required: true, default: 'pccase' },
        name: { type: String, required: true },
        stores: { type: [store_schema] }
    },
    { timestamps: true }
);

const pc_case_model = model('pccase', pc_case_schema);

export default pc_case_model;