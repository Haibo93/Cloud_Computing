import express from 'express';
import { Request, Response } from 'express';
import { Message } from './interfaces';
import { isUserLoggedIn } from './utils';

export const getLogInStatusRoute = express.Router();

async function getLogInStatus(req: Request, res: Response) {
    let returnMessage: Message = {
        success: true,
        message: ""
    };
    try {
        const userId = req.session['user']['id'];
        returnMessage.message = "User found.";
        res.status(200).json({
            result: userId,
            message: returnMessage
        });

    } catch (e) {
        returnMessage.success = false;
        returnMessage.message = "User cannot be found.";
        res.status(400).json(returnMessage);
        console.log(e)
    };
};

getLogInStatusRoute.get('/getLogInStatus', isUserLoggedIn, async function (req, res) {

    await getLogInStatus(req, res);

});