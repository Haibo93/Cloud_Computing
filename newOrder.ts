import express from 'express';
import { Request, Response } from 'express';
import { hashing } from './hash';
import { client, Message } from './main';

export const newOrderRoute = express.Router();

interface Order {
    order_no: number;
    ID_no: number;
    product_id: number;
}

async function addNewOrder(req: Request, res: Response) {
    await client.query(/*sql*/`INSERT INTO Orders (order_no, ID_no, order_date, product_id) VALUES 
    ($1, $2, CURRENT_TIMESTAMP, $3))`, [req.body.order_no, req.body.ID_no, req.body.product_ID]);
}

newOrderRoute.post('/newOrder', async function (req, res) {
    await addNewOrder(req, res);
})

