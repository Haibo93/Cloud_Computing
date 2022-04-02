import express from 'express';
import { Request, Response } from 'express';
import { isLoggedIn } from './utils';
import { Message } from './interfaces';

export const logOutRoutes = express.Router();

async function logOutUser(req: Request, res: Response) {

    delete req.session['user'];

    let returnMessage:Message = {

        success: true,

        message: "Logged out",

    };

    res.json(returnMessage);
};

logOutRoutes.get('/logOutUser', isLoggedIn, async function (req: Request, res: Response) {

    await logOutUser(req, res);
    
});