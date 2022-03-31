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
    const product: Product[] = (await client.query(/*sql*/'DELETE FROM Products WHERE product_id = $1', [id]), [req.body.product_id]).rows;
    
    const productFound = product[0];

    let returnMessage: Message = {
        success: true,
        message: "",
}

deleteProductRoute.post('/deleteProduct', async function (req, res) {
    await deleteNewProduct(req, res);
})
