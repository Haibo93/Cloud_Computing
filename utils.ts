import express from 'express';
import { Request, Response } from 'express';

export const isLoggedIn = function (req: Request, res: Response, next: express.NextFunction) {

    if (req.session['user']) {

        next();

    } else {

        res.redirect('/');

    };
};
