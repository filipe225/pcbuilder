import express, { Request, Response} from 'express'
import pug from 'pug'
import path from 'path'
import 'dotenv/config';

import admin_router from '../routes/admin.routes';
import { connectToDatabase } from '../utils/db.connection';
import cpu_model, { Architecture, Manufacturer, Socket } from '../models/cpu.model';
import { createCpu, updateCpu, deleteCpu } from '../services/cpu.service';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.resolve(path.join(__dirname, '/views'))));

app.set('views', path.resolve(path.join(__dirname, './views')));
app.set('view engine', 'pug');


app.use('/admin', admin_router);

// CPU ROUTES
app.get('/add_cpu', (req, res) => { 
    const manufacturer = Object.values(Manufacturer);
    const socket = Object.values(Socket);
    const architecture = Object.values(Architecture);
    res.render('add_cpu', { manufacturer, socket, architecture } ); 
})
app.post('/add_new_cpu', createCpu);
app.put('update_cpu/:id', updateCpu);
app.delete('delete_cpu/:id', deleteCpu);


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
