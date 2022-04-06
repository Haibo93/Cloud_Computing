import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Product, Message } from './interfaces';

export const adminUpdateProductRoute = express.Router();

async function adminUpdateProduct(req: Request, res: Response) {

    let id: number = parseInt(req.params.id);

    let returnMessage: Message = {

        success: true,

        message: "",

    };

    try {

        const product: Product = {
            prod_name: req.body.prod_name,
            prod_cost: req.body.prod_cost,
            prod_description: req.body.prod_description
        };

        await client.query(/*sql*/`UPDATE Product SET prod_name = $1, prod_cost = $2, prod_description = $3 WHERE id = $4`, 
        [product.prod_name, product.prod_cost, product.prod_description, id]);

        returnMessage.message = `Production ${id} updated.`;

        res.status(200).json(returnMessage);

    } catch (e) {

        returnMessage.success = false;

        returnMessage.message = `Production ${id} failed to update.`

        res.status(400).json(returnMessage);

    };
};

adminUpdateProductRoute.put('/admin/updateProduct/:id', async function (req, res) {

    await adminUpdateProduct(req, res);
    
});