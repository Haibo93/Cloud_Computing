import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Message } from './interfaces';
import { isUserLoggedIn } from './utils';
// import { isLoggedIn } from './utils';

export const userAddOrderRoute = express.Router();

async function userAddOrder(req: Request, res: Response) {

    let id: number = parseInt(req.params.id);

    await client.query(/*sql*/`INSERT INTO Order_ (user_id, product_id, order_date) VALUES ($1, $2, NOW())`, [id, req.body.product_id]);

    let returnMessage: Message = {

        success: true,

        message: "Order added!"

    };

    res.status(201).json(returnMessage);

};

userAddOrderRoute.post('/user/:id/addOrder', isUserLoggedIn, async function (req, res) {

    await userAddOrder(req, res);

});
