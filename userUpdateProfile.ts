import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Message } from './interfaces';


export const userUpdateProfileRoute = express.Router();

async function userUpdateProfile(req: Request, res: Response) {

    let id: number = parseInt(req.params.id);

    let returnMessage: Message = {

        success: true,

        message: "",

    };

    try {

        await client.query(/*sql*/`UPDATE Users SET last_name=$1,first_name=$2,email=$3,phone_number=$4,company_name=$5,updated_at=NOW() WHERE user_id = $6`,
            [req.body.last_name, req.body.first_name, req.body.email, req.body.phone_number, req.body.company_name, id]);

        returnMessage.message = "Profile updated."

    } catch (e) {

        returnMessage.success = false;

        returnMessage.message = `Profile ${id} failed to update.`

        res.status(400).json({ message: 'Update failed' });

    };
};

userUpdateProfileRoute.put('user/:id/updateProfile', async function (req, res) {

    await userUpdateProfile(req, res);

});
