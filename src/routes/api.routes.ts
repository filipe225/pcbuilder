import express, { Router, Request, Response, NextFunction } from "express";


const api_router: Router = express.Router();

api_router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("From api router");
})


export default api_router;