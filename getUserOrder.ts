
import express from 'express';
import { Request, Response } from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

export const getLinkRoutes = express.Router();

getLinkRoutes.post('/getLink', async function (req:Request, res:Response) {
    console.log(req.body);
    let id: string = req.params.id;
    try {
        const link: string = (await client.query(/*sql*/`SELECT * FROM Orders where ID_no = ${id}`, [req.body.Orders])).rows[0].link;
        console.log(link)
        res.status(200).json(link);
    } catch (e) {
        console.log(e)
    };
})
