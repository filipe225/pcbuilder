import express, { Request, Response} from 'express'
import pug from 'pug'
import path from 'path'
import 'dotenv/config';

import admin_router from '../routes/admin.routes';
import { connectToDatabase } from '../utils/db.connection';
import cpu_model from '../models/cpu.model';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.resolve(path.join(__dirname, '/views'))));

app.set('views', path.resolve(path.join(__dirname, './views')));
app.set('view engine', 'pug');


app.use('/admin', admin_router);

app.get('/add_cpu', (req, res) => {
    res.render('add_cpu');
})

app.post('/add_new_cpu', async (req, res) => {
    console.log('ADD NEW CPU POST');
    try {
        console.log(req.body);
        const cpu = new cpu_model(req.body);
        await cpu.save();
        res.statusCode = 200;
        res.send('OK');        
    } catch (error) {
        console.log(error);
        res.statusCode = 401;
        res.send('Failed');

    }

});

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
