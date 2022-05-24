import express, { Request, Response, Router } from 'express';


const test_router: Router = express.Router();

test_router.get('/product', (req: Request, res: Response) => {
    res.status(200).send('Lolada from test api');
});

test_router.post('/product', (req: Request, res: Response) => {
    res.status(200).send('Lolada from test api');
});

test_router.put('product/:product_id', (req: Request, res: Response) => {
    res.status(200).send('Lolada from test api');
});

export default test_router;