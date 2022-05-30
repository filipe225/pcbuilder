
import express, { Router, Request, Response, NextFunction } from "express";


const admin_router: Router = express.Router();

admin_router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("From api router");
})


export default admin_router;