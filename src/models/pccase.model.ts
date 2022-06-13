
import { Schema, model } from 'mongoose';


enum Motherboard_PSU_Support {
    ATX = 'ATX',
    E_ATX = 'E-ATX',
    Micro_ATX = 'Micro-ATX',
    Mini_ITX = 'Mini-ITX'
}

export interface case_interface {
    name: string,
    case_form_factor: string
    motherboard_form_factor: Motherboard_PSU_Support,

    Colour: string,	
    Chassis_Construction_Materials: string,
    Dimensions: string,
    Weight: number,

    Fan_Bays: string,
    Fans_Included: string,

    PSU_Support: Motherboard_PSU_Support,
    Max_PSU_Length: number,

    Max_CPU_Cooler_Height: number,
    Max_GPU_Card_Length: number,

    Front_Side_Top_Panel_IO: string[],	
    Drive_Bays: string[],
    Standard_Expansion_Slots: number,
    Vertical_Expansion_Slots: number
}

const case_schema = new Schema<case_interface>({

});

const case_model = model('cpu', case_schema);

export default case_model;