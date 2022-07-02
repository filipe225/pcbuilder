
import express, { Router, Request, Response, NextFunction } from "express";

import { createCpu, updateCpu, deleteCpu, getAllCpu, addNewCpu, getCpuToUpdate, getCpuToDelete } from '../services/cpu.service';
import { cpuMiddlewareTransform } from '../middleware/cpu.middleware';
import { addNewGpu, createGpu, deleteGpu, getAllGpu, getGpuToDelete, getGpuToUpdate, updateGpu } from "../services/gpu.service";
import { gpuMiddlewareTransform } from "../middleware/gpu.middleware";

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
const pccase_router: Router       = express.Router({mergeParams: true});
const cooler_router: Router         = express.Router({mergeParams: true});

const admin_router: Router          = express.Router();

admin_router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('homepage');
});


// CPU ROUTES
cpu_router.get('/', getAllCpu);
cpu_router.get('/add_cpu', addNewCpu);
cpu_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
cpu_router.get('/update_cpu/:id', getCpuToUpdate);
cpu_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
cpu_router.get('/delete_cpu/:id', getCpuToDelete)
cpu_router.delete('/delete_cpu/:id', deleteCpu);

// COOLER ROUTES
cooler_router.get('/', getAllCpu);
cooler_router.get('/add_cpu', addNewCpu);
cooler_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
cooler_router.get('/update_cpu/:id', getCpuToUpdate);
cooler_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
cooler_router.get('/delete_cpu/:id', getCpuToDelete)
cooler_router.delete('/delete_cpu/:id', deleteCpu);

// GPU ROUTES
gpu_router.get('/', getAllGpu);
gpu_router.get('/add_cpu', addNewGpu);
gpu_router.post('/add_new_cpu', gpuMiddlewareTransform, createGpu);
gpu_router.get('/update_cpu/:id', getGpuToUpdate);
gpu_router.put('/update_cpu/:id', gpuMiddlewareTransform, updateGpu);
gpu_router.get('/delete_cpu/:id', getGpuToDelete)
gpu_router.delete('/delete_cpu/:id', deleteGpu);

// PSU ROUTES
psu_router.get('/', getAllCpu);
psu_router.get('/add_cpu', addNewCpu);
psu_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
psu_router.get('/update_cpu/:id', getCpuToUpdate);
psu_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
psu_router.get('/delete_cpu/:id', getCpuToDelete)
psu_router.delete('/delete_cpu/:id', deleteCpu);

// RAM ROUTES
ram_router.get('/', getAllCpu);
ram_router.get('/add_cpu', addNewCpu);
ram_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
ram_router.get('/update_cpu/:id', getCpuToUpdate);
ram_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
ram_router.get('/delete_cpu/:id', getCpuToDelete)
ram_router.delete('/delete_cpu/:id', deleteCpu);

// MOTHERBOARD ROUTES
motherboard_router.get('/', getAllCpu);
motherboard_router.get('/add_cpu', addNewCpu);
motherboard_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
motherboard_router.get('/update_cpu/:id', getCpuToUpdate);
motherboard_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
motherboard_router.get('/delete_cpu/:id', getCpuToDelete)
motherboard_router.delete('/delete_cpu/:id', deleteCpu);

// PC CASES ROUTES
pccase_router.get('/', getAllCpu);
pccase_router.get('/add_cpu', addNewCpu);
pccase_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
pccase_router.get('/update_cpu/:id', getCpuToUpdate);
pccase_router.put('/update_cpu/:id', cpuMiddlewareTransform, updateCpu);
pccase_router.get('/delete_cpu/:id', getCpuToDelete)
pccase_router.delete('/delete_cpu/:id', deleteCpu);


admin_router.use('/cpu', cpu_router);
admin_router.use('/gpu', gpu_router);
admin_router.use('/psu', psu_router);
admin_router.use('/motherboard', motherboard_router);
admin_router.use('/pccase', pccase_router);
admin_router.use('/ram', ram_router);
admin_router.use('/cooler', cooler_router);

export default admin_router;