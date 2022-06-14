import express, { Request, Response, NextFunction} from 'express'
import pug from 'pug'
import path from 'path'
import 'dotenv/config';

import admin_router from '../routes/admin.routes';
import { connectToDatabase } from '../utils/db.connection';

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
// contains all components routers
app.use('/', admin_router);


// ERROR HANDLER
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(400).send(err.message);
})

app.listen(6200, () => {
    console.log("App running at http://localhost:6200")
    connectToDatabase();
});