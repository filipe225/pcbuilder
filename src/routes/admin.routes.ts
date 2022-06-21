
import express, { Router, Request, Response, NextFunction } from "express";

import { createCpu, updateCpu, deleteCpu, getAllCpus, addNewCpu, getCpuToUpdate, getCpuToDelete } from '../services/cpu.service';
import { cpuMiddlewareTransform } from '../middleware/cpu.middleware';

/*
    /admin/
        /admin/cpu/
        /admin/cpu/new                  (get/post)
        /admin/cpu/update/:cpu_name     (put)
        /admin/cpu/delete/:cpu_name     (delete)
*/

const cpu_router: Router            = express.Router({mergeParams: true});
const gpu_router: Router            = express.Router({mergeParams: true});
const ram_router: Router            = express.Router({mergeParams: true});
const motherboard_router: Router    = express.Router({mergeParams: true});
const psu_router: Router            = express.Router({mergeParams: true});
const pccase_router: Router         = express.Router({mergeParams: true});

const admin_router: Router          = express.Router();

admin_router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('homepage');
});


// CPU ROUTES
cpu_router.get('/', getAllCpus);
cpu_router.get('/add_cpu', addNewCpu);
cpu_router.post('/add_new_cpu', cpuMiddlewareTransform, createCpu);
cpu_router.get('/update_cpu/:id', getCpuToUpdate);
cpu_router.put('/update_cpu/:id', updateCpu);
cpu_router.get('/delete_cpu/:id', getCpuToDelete)
cpu_router.delete('/delete_cpu/:id', deleteCpu);

admin_router.use('/cpu', cpu_router);
admin_router.use('/gpu', cpu_router);
admin_router.use('/psu', cpu_router);
admin_router.use('/motherboard', cpu_router);
admin_router.use('/pccase', cpu_router);
admin_router.use('/ram', cpu_router);
admin_router.use('/cooler', cpu_router);

export default admin_router;