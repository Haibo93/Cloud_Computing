import express from 'express';
import { Request, Response } from 'express';
import { hashing } from './hash';
import { client, Message } from './main';

export const deleteProduct = express.Router();

interface Product {
    product_id: number;
    name: string;
    cost: number;
    timeframe: number;
}

async function deleteProduct(req: Request, res: Response) {
    console.log(req.body);
    let id: string = req.params.id;
    try {
        const product: string = (await client.query(/*sql*/'DELETE FROM Products WHERE product_id = $1', [id]);
        console.log(link)
        res.status(200).json(link);
    } catch (e) {
        res.status(400).json({ message: 'Product does not exist' })
    };

deleteProductRoute.post('admin/<admin_id>/deleteProduct', async function (req, res) {
    await deleteNewProduct(req, res);
})
