import express from 'express';
import { Request, Response } from 'express';
import {client} from './main';


export const getAllOrdersRoutes = express.Router();

async function getAllOrders(req: Request, res: Response) {
    console.log(req.body);
    try {
        const link: any = (await client.query(/*sql*/`SELECT * FROM Orders`, [req.body.Orders]));
        console.log(link)
        res.status(200).json(link);
    } catch (e) {
        res.status(400).json({ message: 'Unable to find orders, please try again later' })
    };
};

getAllOrdersRoutes.get('/admin/getAllOrder', async function (req, res) {
    await getAllOrders(req, res);
})
    