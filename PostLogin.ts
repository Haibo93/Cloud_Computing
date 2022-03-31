import express from 'express';
import { Request, Response } from 'express';
import { checkHash } from './hash';
import { client, Message } from './main';

export const logInRoutes = express.Router();



interface User {
    id: number;
    email: string;
    password: string;
    last_name: string;
    first_name: string;
    phone_number: string;
    is_active: boolean;
    is_admin: boolean;
}

class LoginMessage implements Message {
    success: boolean;
    message: string;
    is_admin: boolean;
    constructor(success: boolean, message: string, is_admin: boolean) {
        this.success = success;
        this.message = message;
        this.is_admin = is_admin;
    }
}

logInRoutes.post('/memberLogin', async function (req: Request, res: Response) {
    const users: User[] = (await client.query(/*sql*/"SELECT * FROM users where email = $1"
        , [req.body.email])).rows;
    const userFound = users[0];
    if (userFound && await checkHash(req.body.password, userFound.password)) {
        req.session['user'] = userFound;
        if (userFound.is_active == true) {
            let returnMessage: LoginMessage;
            if (!userFound.is_admin) { returnMessage = new LoginMessage(true, "This is a member account.", false) }
            else { returnMessage = new LoginMessage(false, "Sorry! This is an admin account.", true) }
            res.status(200).json(returnMessage);
            return
        }
    } else {
        let returnMessage: Message = {
            success: false,
            message: "Incorrect username/password"
        };
        res.status(401).json(returnMessage);
    }
})

logInRoutes.post('/adminLogin', async function (req: Request, res: Response) {
    const users: User[] = (await client.query(/*sql*/"SELECT * FROM users where email = $1"
        , [req.body.email])).rows;
    const userFound = users[0];

    if (userFound && await checkHash(req.body.password, userFound.password)) {
        req.session['user'] = userFound;
        if (userFound.is_active == true) {
            let returnMessage: LoginMessage;
            if (userFound.is_admin) { returnMessage = new LoginMessage(true, "This is an admin account.", true) }
            else { returnMessage = new LoginMessage(false, "Sorry! This is a member account.", false) }
            res.status(200).json(returnMessage);
            return
        }
    } else {
        let returnMessage: Message = {
            success: false,
            message: "Incorrect username/password"
        };
        res.status(401).json(returnMessage);
    }
})
