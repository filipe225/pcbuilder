import express, { Request, Response, NextFunction} from 'express'
import pug from 'pug'
import path from 'path'
import 'dotenv/config';

import admin_router from '../routes/admin.routes';
import { connectToDatabase } from '../utils/db.connection';
import cpu_model, { Architecture, Manufacturer, Socket } from '../models/cpu.model';
import { createCpu, updateCpu, deleteCpu } from '../services/cpu.service';
import CpuMiddlewareTransform from '../middleware/cpu.middleware';
import { StoreName } from '../models/store.model';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC FILES CSS / JS
app.use(express.static(path.resolve(path.join(__dirname, '/views'))));

// SET ENGINE AS PUG. SET VIEWS DIRECTORY
app.set('views', path.resolve(path.join(__dirname, './views')));
app.set('view engine', 'pug');


// ROUTES

// ADMIN ROUTER
app.use('/', admin_router);

// CPU ROUTES
app.get('/add_cpu', (req, res) => { 
    const manufacturer = Object.values(Manufacturer);
    const socket = Object.values(Socket);
    const architecture = Object.values(Architecture);
    const stores = Object.values(StoreName)
    res.render('add_cpu', { manufacturer, socket, architecture, stores } ); 
})
app.post('/add_new_cpu', CpuMiddlewareTransform, createCpu);
app.put('update_cpu/:id', updateCpu);
app.delete('delete_cpu/:id', deleteCpu);


// ERROR HANDLER
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(400).send(err.message);
})

app.listen(6200, () => {
    console.log("App running at http://localhost:6200")
    connectToDatabase();
});

// app.get('/', (req: Request, res: Response) => {
//     res.render('homepage', { 
//         computers: [
//             {
//                 ram: '2x8gb',
//                 processor: 'ryzen 5 3600',
//                 graphics_card: '6700xt',
//                 motherboard: 'aorus elite v2',
//                 case: 'mastercooler box 500'
//             },
//             {
//                 ram: '2x8gb',
//                 processor: 'ryzen 5 3600',
//                 graphics_card: '6700xt',
//                 motherboard: 'aorus elite v2',
//                 case: 'mastercooler box 500'
//             },
//             {
//                 ram: '2x8gb',
//                 processor: 'ryzen 5 3600',
//                 graphics_card: '6700xt',
//                 motherboard: 'aorus elite v2',
//                 case: 'mastercooler box 500'
//             }
//         ]
//      })
// });
