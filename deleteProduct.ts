import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';

export const deleteProductRoute = express.Router();

// interface Product {
//     product_id: number;
//     name: string;
//     cost: number;
//     timeframe: number;
// }

async function deleteProduct(req: Request, res: Response) {
    console.log(req.body);
    let id: string = req.params.id;
    try {
        await client.query(/*sql*/'DELETE FROM Products WHERE product_id = $1', [id]);
        res.status(200).json({message: "success"});
    } catch (e) {
        res.status(400).json({ message: 'Product does not exist' })
    };
};

deleteProductRoute.post('admin/<admin_id>/deleteProduct', async function (req, res) {
    await deleteProduct(req, res);
});
