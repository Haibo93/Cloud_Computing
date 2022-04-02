import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Message } from './interfaces';

export const userDeleteOrderRoute = express.Router();

async function userDeleteOrder(req: Request, res: Response) {

    let order_id: number = parseInt(req.params.order_id);

    let returnMessage: Message = {

        success: true,

        message: "",

    };

    try {

        await client.query(/*sql*/`DELETE FROM Order_ WHERE id = $1`, [order_id]);

        returnMessage.message = `Order ${order_id} deleted.`;

        res.status(200).json(returnMessage);

    } catch (e) {

        returnMessage.success = false;

        returnMessage.message = `Order ${order_id} does not exist.`

        res.status(400).json(returnMessage);

    };
};

userDeleteOrderRoute.delete('/user/:user_id/deleteOrder/:order_id', async function (req, res) {

    await userDeleteOrder(req, res);

});