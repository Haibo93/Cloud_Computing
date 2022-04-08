import express from 'express';
import { Request, Response } from 'express';

export const isUserLoggedIn = function (req: Request, res: Response, next: express.NextFunction) {

    if (req.session['user']) {

        next();

    } else {

        res.status(401).json("Unauthorized!");

    };
};

export const isAdminLoggedIn = function (req: Request, res: Response, next: express.NextFunction) {
    console.log("ran auth middleware");
    if (req.session['user']) {

        if (req.session['user']['is_admin']) {

            next();
            
        } else {

            res.status(401).json("Unauthorized!");

        };

    } else {

        res.status(401).json("Unauthorized!");

    };
};

export const loggedInUserDetails = function (req: Request, res: Response) {

    if (req.session['user']) {
        const userDetailThings = req.session['user']
        res.status(200).json({
            result: userDetailThings
        })

    } else {

        res.status(401).json("Unauthorized!");

    };
};