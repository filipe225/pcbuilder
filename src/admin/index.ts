import express, { Request, Response} from 'express'
import pug from 'pug'
import path from 'path'

const app = express();

app.use(express.json());


app.use(express.static(path.resolve(path.join(__dirname, '/views'))));

app.set('views', path.resolve(path.join(__dirname, './views')));
app.set('view engine', 'pug');


app.get('/', (req: Request, res: Response) => {
    res.render('homepage', { 
        computers: [
            {
                ram: '2x8gb',
                processor: 'ryzen 5 3600',
                graphics_card: '6700xt',
                motherboard: 'aorus elite v2',
                case: 'mastercooler box 500'
            },
            {
                ram: '2x8gb',
                processor: 'ryzen 5 3600',
                graphics_card: '6700xt',
                motherboard: 'aorus elite v2',
                case: 'mastercooler box 500'
            },
            {
                ram: '2x8gb',
                processor: 'ryzen 5 3600',
                graphics_card: '6700xt',
                motherboard: 'aorus elite v2',
                case: 'mastercooler box 500'
            }
        ]
     })
});

app.listen(6200, () => {
    console.log("App running at http://localhost:6200")
})