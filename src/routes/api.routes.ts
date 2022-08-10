import express, { Router, Request, Response, NextFunction } from "express";
import { getAllComputers, getComputerById, getMockData } from "../services/computer.service";
import { getAllComputerSetsApi } from "../services/computer_set.service";

/*
    / homepage
    GET /computers
    GET /computer/:id
    GET /products/cpu/:id
    GET /products/:product_type/:id
*/

const api_router: Router = express.Router();

//api_router.get('/user');
//api_router.post('/user_registration', registerUser);

api_router.get('/computer_sets', getAllComputerSetsApi);

api_router.get('/test/computers', getMockData);

api_router.get('/computers', getAllComputers);

api_router.get('/computer/:id', getComputerById);

//api_router.get('/products/:product_type/:id', getProductById);

export default api_router;