import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Order, Message } from './interfaces';

export const userGetOrdersRoute = express.Router();

async function getUserOrder(req: Request, res: Response) {

    let id: number = parseInt(req.params.id);

    let returnMessage: Message = {

        success: true,

        message: ""

    };

    try {

        const userOrders: Order[] = (await client.query(/*sql*/`SELECT * FROM Order_ where user_id = $1`, [id])).rows[0];

        returnMessage.message = "Orders retrieved successfully.";

        res.status(200).json({

            result: userOrders,

            message: returnMessage

        });

    } catch (e) {

        returnMessage.success = false;

        returnMessage.message = "Orders cannot be retrieved.";

        res.status(400).json(returnMessage);

    };
};

userGetOrdersRoute.get('/user/:id/getUserOrder', async function (req, res) {

    await getUserOrder(req, res);

});