import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Message } from './interfaces';

export const adminAddProductRoute = express.Router();

async function addNewProduct(req: Request, res: Response) {

    await client.query(/*sql*/`INSERT INTO Product (prod_name, prod_cost, prod_description) VALUES ($1, $2, $3))`, [req.body.prod_name, req.body.prod_cost, req.body.prod_description]);
    
    let returnMessage: Message = {

        success: true,

        message: "New Product Added",

    };

    res.status(200).json(returnMessage);
};

adminAddProductRoute.post('admin/addProduct', async function (req, res) {

    await addNewProduct(req, res);
    
})