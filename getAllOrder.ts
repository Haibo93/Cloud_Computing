import express from 'express';
import { Request, Response } from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

export const getLinkRoutes = express.Router();

async function getAllOrders(req: Request, res: Response) {
    console.log(req.body);
    try {
        const link: string = (await client.query(/*sql*/`SELECT * FROM Orders`, [req.body.Orders])).link;
        console.log(link)
        res.status(200).json(link);
    } catch (e) {
        res.status(400).json({ message: 'Unable to find orders, please try again later' })
    };
})

registerRoute.getAllOrders('/admin/getAllOrder', async function (req, res) {
    await insertUser(req, res);
})
    