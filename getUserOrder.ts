
import express from 'express';
import { Request, Response } from 'express';
import {client} from './main';

export const getUserOrderRoutes = express.Router();

async function getUserOrder(req: Request, res: Response) {
    console.log(req.body);
    let id: string = req.params.id;
    try {
        const link: string = (await client.query(/*sql*/`SELECT * FROM Orders where ID_no = ${id}`, [req.body.Orders])).rows[0].link;
        console.log(link)
        res.status(200).json(link);
    } catch (e) {
        res.status(400).json({ message: 'Unable to find user order' })
    };
};

getUserOrderRoutes.get('/user/getUserOrder', async function (req, res) {
    await getUserOrder(req, res);
})