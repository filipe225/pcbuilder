import computer from "../models/computer.model";
import express, { Router, Request, Response, NextFunction } from "express";

import { getAllComputerSets } from "../services/computer_set.service";

import { computerMiddlewareTransform } from "../middleware/computer.middleware";
import { addNewComputer, createComputer, deleteComputer, getAllComputers, getComputerToDelete, getComputerToUpdate, updateComputer } from "../services/computer.service";

import { cpuMiddlewareTransform } from '../middleware/cpu.middleware';
import { createCpu, updateCpu, deleteCpu, getAllCpus, addNewCpu, getCpuToUpdate, getCpuToDelete } from '../services/cpu.service';

import { coolerMiddlewareTransform } from "../middleware/cooler.middleware";
import { addNewCooler, createCooler, deleteCooler, getAllCoolers, getCoolerToDelete, getCoolerToUpdate, updateCooler } from "../services/cooler.service";

import { gpuMiddlewareTransform } from "../middleware/gpu.middleware";
import { addNewGpu, createGpu, deleteGpu, getAllGpu, getGpuToDelete, getGpuToUpdate, updateGpu } from "../services/gpu.service";

import { ramMiddlewareTransform } from "../middleware/ram.middleware";
import { addNewRam, createRam, deleteRam, getAllRams, getRamToDelete, getRamToUpdate, updateRam } from "../services/ram.service";

import { motherboardMiddlewareTransform } from "../middleware/motherboard.middleware";
import { addNewMotherboard, createMotherboard, deleteMotherboard, getAllMotherboards, getMotherboardToDelete, getMotherboardToUpdate, updateMotherboard } from "../services/motherboard.service";

import { pc_caseMiddlewareTransform } from "../middleware/pccase.middleware";
import { addNewPcCase, createPcCase, deletePcCase, getAllPcCases, getPcCaseToDelete, getPcCaseToUpdate, updatePcCase } from "../services/pccase.service";

import { psuMiddlewareTransform } from "../middleware/psu.middleware";
import { addNewPsu, createPsu, deletePsu, getAllPsus, getPsuToDelete, getPsuToUpdate, updatePsu } from "../services/psu.service";

import { addNewStorage, createStorage, deleteStorage, getAllStorages, getStorageToDelete, getStorageToUpdate, updateStorage } from "../services/storage.service";
import { storageMiddlewareTransform } from "../middleware/storage.middleware";


/*
    /admin/
        /admin/cpu/
        /admin/cpu/new                  (get, post)
        /admin/cpu/update/:cpu_name     (get, put)
        /admin/cpu/delete/:cpu_name     (get, delete)
*/

const cpu_router: Router            = express.Router({mergeParams: true});
const gpu_router: Router            = express.Router({mergeParams: true});
const ram_router: Router            = express.Router({mergeParams: true});
const motherboard_router: Router    = express.Router({mergeParams: true});
const psu_router: Router            = express.Router({mergeParams: true});
const pccase_router: Router         = express.Router({mergeParams: true});
const cooler_router: Router         = express.Router({mergeParams: true});
const storage_router: Router        = express.Router({mergeParams: true});
const computer_router: Router       = express.Router({mergeParams: true});
const computer_set_router: Router   = express.Router({mergeParams: true});

const admin_router: Router          = express.Router();

admin_router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('homepage');
});

// COMPUTER SET ROUTES
computer_set_router.get('/', getAllComputerSets);
    // computer_set_router.post('/new_computer_set', computerSetMiddlewareTransform addComputerSet);
    // computer_set_router.delete('/computer_set/:id', deleteComputerSet);

// COMPUTER ROUTES
computer_router.get('/', getAllComputers);
computer_router.get('/add_computer', addNewComputer);
computer_router.post('/add_new_computer', computerMiddlewareTransform, createComputer);
computer_router.get('/update_computer/:id', getComputerToUpdate);
computer_router.put('/update_computer/:id', computerMiddlewareTransform, updateComputer);
computer_router.get('/delete_computer/:id', getComputerToDelete);
computer_router.delete('/delete_computer/:id', deleteComputer);

// CPU ROUTES
cpu_router.get('/', getAllCpus);
cpu_router.get('/add_cpu', addNewCpu);
cpu_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
cpu_router.get('/update_cpu/:id', getCpuToUpdate);
cpu_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
cpu_router.get('/delete_cpu/:id', getCpuToDelete)
cpu_router.delete('/delete_cpu/:id', deleteCpu);

// COOLER ROUTES
cooler_router.get('/', getAllCoolers);
cooler_router.get('/add_cooler', addNewCooler);
cooler_router.post('/add_new_cooler', coolerMiddlewareTransform, createCooler);
cooler_router.get('/update_cooler/:id', getCoolerToUpdate);
cooler_router.put('/update_cooler/:id', coolerMiddlewareTransform, updateCooler);
cooler_router.get('/delete_cooler/:id', getCoolerToDelete)
cooler_router.delete('/delete_cooler/:id', deleteCooler);

// GPU ROUTES
gpu_router.get('/', getAllGpu);
gpu_router.get('/add_gpu', addNewGpu);
gpu_router.post('/add_new_gpu', gpuMiddlewareTransform, createGpu);
gpu_router.get('/update_gpu/:id', getGpuToUpdate);
gpu_router.put('/update_gpu/:id', gpuMiddlewareTransform, updateGpu);
gpu_router.get('/delete_gpu/:id', getGpuToDelete)
gpu_router.delete('/delete_gpu/:id', deleteGpu);

// PSU ROUTES
psu_router.get('/', getAllPsus);
psu_router.get('/add_psu', addNewPsu);
psu_router.post('/add_new_psu', psuMiddlewareTransform, createPsu);
psu_router.get('/update_psu/:id', getPsuToUpdate);
psu_router.put('/update_psu/:id', psuMiddlewareTransform, updatePsu);
psu_router.get('/delete_psu/:id', getPsuToDelete)
psu_router.delete('/delete_psu/:id', deletePsu);

// RAM ROUTES
ram_router.get('/', getAllRams);
ram_router.get('/add_ram', addNewRam);
ram_router.post('/add_new_ram', ramMiddlewareTransform, createRam);
ram_router.get('/update_ram/:id', getRamToUpdate);
ram_router.put('/update_ram/:id', ramMiddlewareTransform, updateRam);
ram_router.get('/delete_ram/:id', getRamToDelete)
ram_router.delete('/delete_ram/:id', deleteRam);

// MOTHERBOARD ROUTES
motherboard_router.get('/', getAllMotherboards);
motherboard_router.get('/add_motherboard', addNewMotherboard);
motherboard_router.post('/add_new_motherboard', motherboardMiddlewareTransform, createMotherboard);
motherboard_router.get('/update_motherboard/:id', getMotherboardToUpdate);
motherboard_router.put('/update_motherboard/:id', motherboardMiddlewareTransform, updateMotherboard);
motherboard_router.get('/delete_motherboard/:id', getMotherboardToDelete)
motherboard_router.delete('/delete_motherboard/:id', deleteMotherboard);

// PC CASES ROUTES
pccase_router.get('/', getAllPcCases);
pccase_router.get('/add_pccase', addNewPcCase);
pccase_router.post('/add_new_pccase', pc_caseMiddlewareTransform, createPcCase);
pccase_router.get('/update_pccase/:id', getPcCaseToUpdate);
pccase_router.put('/update_pccase/:id', pc_caseMiddlewareTransform, updatePcCase);
pccase_router.get('/delete_pccase/:id', getPcCaseToDelete)
pccase_router.delete('/delete_pccase/:id', deletePcCase);

// STORAGE ROUTES
storage_router.get('/', getAllStorages);
storage_router.get('/add_storage', addNewStorage);
storage_router.post('/add_new_storage', storageMiddlewareTransform, createStorage);
storage_router.get('/update_storage/:id', getStorageToUpdate);
storage_router.put('/update_storage/:id', storageMiddlewareTransform, updateStorage);
storage_router.get('/delete_storage/:id', getStorageToDelete)
storage_router.delete('/delete_storage/:id', deleteStorage);

// ADMIN ROUTER
admin_router.use('/computer', computer_router);
admin_router.use('/computer_set', computer_set_router);

admin_router.use('/cpu', cpu_router);
admin_router.use('/gpu', gpu_router);
admin_router.use('/psu', psu_router);
admin_router.use('/motherboard', motherboard_router);
admin_router.use('/pccase', pccase_router);
admin_router.use('/ram', ram_router);
admin_router.use('/cooler', cooler_router);
admin_router.use('/storage', storage_router);


export default admin_router;