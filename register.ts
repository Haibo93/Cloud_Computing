import express from 'express';
import { Request, Response } from 'express';
import { hashing } from './hash';
import { client, Message } from './main';

export const registerRoute = express.Router();

interface User {
    email: string;
    password: string;
    last_name: string;
    first_name: string;
    phone_number: string;
    is_admin: boolean;
    company_name: string;
}

async function insertUser(req: Request, res: Response) {
    const users: User[] = (await client.query("SELECT * FROM users where email = $1"
        , [req.body.email])).rows;

    const userFound = users[0];

    let returnMessage: Message = {
        success: true,
        message: "",
    };

    if (userFound === undefined) {
        let hashedPassword = await hashing(req.body.password);
        await client.query(/*sql*/`INSERT INTO users (last_name,first_name,email,password_hash,phone_number,is_admin,company_name,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,NOW(),NOW())`, [req.body.last_name, req.body.first_name, req.body.email, hashedPassword, parseInt(req.body.phone_number), req.body.is_admin, req.body.company_name]);
        returnMessage.message = "Successfully Registered "
        const users: User[] = (await client.query("SELECT * FROM users where email = $1", [req.body.email])).rows;
        const newUser = users[0];
        req.session['user'] = newUser;
        res.status(200).json(returnMessage);
    } else {
        res.status(400).json({ message: 'already existed' })
    };
};

registerRoute.post('/memberRegisteration', async function (req, res) {
    await insertUser(req, res);
})
