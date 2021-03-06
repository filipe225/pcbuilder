import express, { Request, Response, NextFunction} from 'express';
import path from 'path';
import 'dotenv/config';
import methodOverride from 'method-override';

import admin_router from '../routes/admin.routes';
import { connectToDatabase } from '../utils/db.connection';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC FILES CSS / JS
app.use(express.static(path.resolve(path.join(__dirname, '/static'))));

// SET ENGINE AS PUG. SET VIEWS DIRECTORY
app.set('views', [
            path.resolve(path.join(__dirname, '/views')),
            path.resolve(path.join(__dirname, '/views/computer_set')),
            path.resolve(path.join(__dirname, '/views/computer')),
            path.resolve(path.join(__dirname, '/views/cpu')),
            path.resolve(path.join(__dirname, '/views/cooler')),
            path.resolve(path.join(__dirname, '/views/psu')),
            path.resolve(path.join(__dirname, '/views/gpu')),
            path.resolve(path.join(__dirname, '/views/ram')),
            path.resolve(path.join(__dirname, '/views/motherboard')),
            path.resolve(path.join(__dirname, '/views/pccase')),
            path.resolve(path.join(__dirname, '/views/storage'))
        ]);
app.set('view engine', 'pug');
// set basedir to be able to have multiple folders inside views
app.locals.basedir =  path.resolve(path.join(__dirname, '/views'));

// set method override to be able to use PUT and DELETE in html forms
app.use(methodOverride('_method'));

// ADMIN ROUTER
// contains all components routers
app.use('/admin', admin_router);
app.get('/', (req, res) => res.redirect('/admin'));


// ERROR HANDLER
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(400).send(err.message);
});

app.listen(6200, () => {
    console.log("App running at http://localhost:6200")
    connectToDatabase();
});