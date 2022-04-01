
import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';

export const newProductRoute = express.Router();

async function addNewProduct(req: Request, res: Response) {
    await client.query(/*sql*/`INSERT INTO Products (id, name, cost, timeframe) VALUES 
    ($1, $2, $3, $4))`, [req.body.order_no, req.body.ID_no, req.body.product_ID]);
}

newProductRoute.post('/newProduct', async function (req, res) {
    await addNewProduct(req, res);
})