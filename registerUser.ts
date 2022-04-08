import express from 'express';
import { Request, Response } from 'express';
import { hashing } from './hash';
import { client } from './main';
import { User, Message } from './interfaces'

export const registerUserRoute = express.Router();

async function insertUser(req: Request, res: Response) {

    const users: User[] = (await client.query("SELECT * FROM User_ where email = $1"
        , [req.body.email])).rows;

    const userFound = users[0];

    let returnMessage: Message = {

        success: true,

        message: "",
        
    };

    if (userFound === undefined) {

        let hashedPassword = await hashing(req.body.password);

        console.log(req.body)

        await client.query(/*sql*/`INSERT INTO User_ 
        (last_name, first_name, email, password_hash, phone_number, company_name, is_admin, created_at, updated_at) 
        VALUES ($1,$2,$3,$4,$5,$6,$7,NOW(),NOW())`, 
        [req.body.last_name, req.body.first_name, req.body.email, hashedPassword, req.body.phone_number, req.body.company_name, req.body.is_admin]);

        returnMessage.message = "Successfully Registered ";
        
        const users: User[] = (await client.query("SELECT * FROM User_ where email = $1", [req.body.email])).rows;

        const newUser = users[0];

        req.session['user'] = newUser;

        res.redirect(200, '/');

    } else {

        res.status(400).json({ message: 'already existed' })

    };
};

registerUserRoute.post('/registerUser', async function (req, res) {
    await insertUser(req, res);
});
