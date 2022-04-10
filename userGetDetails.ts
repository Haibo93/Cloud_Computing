import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { User, Message } from './interfaces';
import { isUserLoggedIn } from './utils';

export const userGetDetailsRoute = express.Router();

async function userGetDetails(req: Request, res: Response) {
    let id: number = parseInt(req.params.id);
    let returnMessage: Message = {
        success: true,
        message: ""
    };
    try {
        const userDetails: User[] = (await client.query(/*sql*/`SELECT * FROM User_ where id = $1`, [id])).rows[0];
        returnMessage.message = "User found.";
        res.status(200).json({
            result: userDetails,
            message: returnMessage
        });

    } catch (e) {
        returnMessage.success = false;
        returnMessage.message = "User cannot be found.";
        res.status(404).json(returnMessage);
        console.log(e)
    };
};

userGetDetailsRoute.get('/user/:id/', isUserLoggedIn, async function (req, res) {
    await userGetDetails(req, res);
});