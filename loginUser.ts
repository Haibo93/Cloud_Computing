import express from 'express';
import { Request, Response } from 'express';
import { checkHash } from './hash';
import { client } from './main';
import { LoginMessage, User } from './interfaces'

export const loginUserRoute = express.Router();

async function loginUser(req: Request, res: Response) {

    const users: User[] = (await client.query(/*sql*/`SELECT * FROM User_ where email = $1`
        , [req.body.email])).rows;

    const userFound = users[0];

    let returnMessage: LoginMessage;

    if (userFound && await checkHash(req.body.password, userFound.password_hash!)) {
        // should not return the hash of user's password to the front end
        delete userFound.password_hash;
        
        req.session['user'] = userFound;

        console.log(req.session);

        if (userFound.is_admin == true) {

            returnMessage = new LoginMessage(true, "Welcome Admin!", true)

        } else {

            returnMessage = new LoginMessage(true, "Welcome Member", false);

        };

        res.status(200).json(returnMessage);

    } else {

        returnMessage = new LoginMessage(false, "Incorrect email or password", false);
        
        res.status(404).json(returnMessage);

    };
};

loginUserRoute.post('/loginUser', async function (req: Request, res: Response) {
    
    await loginUser(req, res);

});

