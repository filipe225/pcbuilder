import express, { Router, Request, Response, NextFunction } from "express";


const account_router: Router = express.Router();

account_router.post('/register', (req, res) => {
    const { email, password, confirm_password } = req.body;

    res.status(200).send('Hello from registration');

});

account_router.post('/sign_in', (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.status(200).send('Hello from Sign In');
});

account_router.post('/sign_out', (req: Request, res: Response) => {
    res.status(200).send('Hello from Sign Out');
});

export default account_router;