
import express, { Router, Request, Response, NextFunction } from "express";

const cpu_router: Router            = express.Router();
const gpu_router: Router            = express.Router();
const ram_router: Router            = express.Router();
const motherboard_router: Router    = express.Router();
const psu_router: Router            = express.Router();
const pccase_router: Router         = express.Router();

const admin_router: Router          = express.Router();

admin_router.use('/cpu', cpu_router);
admin_router.use('/gpu', cpu_router);
admin_router.use('/psu', cpu_router);
admin_router.use('/motherboard', cpu_router);
admin_router.use('/pccase', cpu_router);
admin_router.use('/ram', cpu_router);
admin_router.use('/cooler', cpu_router);

admin_router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('homepage');
});




/*

    /admin/
        /admin/cpu/
        /admin/cpu/new                  (get/post)
        /admin/cpu/update/:cpu_name     (put)
        /admin/cpu/delete/:cpu_name     (delete)
*/



export default admin_router;