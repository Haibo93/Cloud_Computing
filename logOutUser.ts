import express from 'express';
import { Request, Response } from 'express';
import { isUserLoggedIn } from './utils';
import { Message } from './interfaces';

export const logOutUserRoute = express.Router();

async function logOutUser(req: Request, res: Response) {

    delete req.session['user'];

    let returnMessage:Message = {

        success: true,

        message: "Logged out",

    };

    res.json(returnMessage);
};

logOutUserRoute.get('/logOutUser', isUserLoggedIn, async function (req: Request, res: Response) {

    await logOutUser(req, res);
    
});