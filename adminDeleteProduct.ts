import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Message } from './interfaces';
import { isAdminLoggedIn } from './utils';

export const adminDeleteProductRoute = express.Router();

async function adminDeleteProduct(req: Request, res: Response) {

    let id: number = parseInt(req.params.id);

    let returnMessage: Message = {

        success: true,

        message: "",
        
    };

    try {

        await client.query(/*sql*/`DELETE FROM Product WHERE id = $1;`, [id]);

        returnMessage.message = `Production ${id} deleted.`;

        res.status(200).json(returnMessage);

    } catch (e) {

        returnMessage.success = false;

        returnMessage.message = `Production ${id} not found.`

        res.status(404).json(returnMessage);

    };
};

adminDeleteProductRoute.delete('/admin/deleteProduct/:id', isAdminLoggedIn, async function (req, res) {
    
    await adminDeleteProduct(req, res);

});
