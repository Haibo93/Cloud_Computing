import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';

export const editProfileRoute = express.Router();

// interface User {
//     email: string;
//     password: string;
//     last_name: string;
//     first_name: string;
//     phone_number: string;
//     is_admin: boolean;
//     company_name: string;
// }

async function editProfile(req: Request, res: Response) {
    console.log(req.body);
    let id: string = req.params.id;
    try {
        await client.query(/*sql*/'UPDATE Users SET last_name=$1,first_name=$2,email=$3,phone_number=$4,company_name=$5,updated_at=$6 WHERE user_id = $7', [req.body.last_name, req.body.first_name, req.body.email, parseInt(req.body.phone_number), req.body.company_name, id]);

    } catch (e) {
        res.status(400).json({ message: 'Update failed' })
    };
};
editProfileRoute.post('User/<user_id>/editProfile', async function (req, res) {
    await editProfile(req, res);
});
