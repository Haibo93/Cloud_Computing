import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Message } from './interfaces';

export const adminDeleteProductRoute = express.Router();

async function adnubDeleteProduct(req: Request, res: Response) {

    let id: number = parseInt(req.params.id);

    let returnMessage: Message = {

        success: true,

        message: "",
        
    };

    try {

        await client.query(/*sql*/`DELETE FROM Products WHERE product_id = $1`, [id]);

        returnMessage.message = `Production ${id} deleted.`;

        res.status(200).json(returnMessage);

    } catch (e) {

        returnMessage.success = false;

        returnMessage.message = `Production ${id} does not exist.`

        res.status(400).json(returnMessage);

    };
};

adminDeleteProductRoute.delete('admin/deleteProduct/:id', async function (req, res) {
    await adnubDeleteProduct(req, res);
});
