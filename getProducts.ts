import express from 'express';
import { Request, Response } from 'express';
import { client } from './main';
import { Product, Message } from './interfaces'

export const getProductsRoute = express.Router();

async function getProducts(req: Request, res: Response) {

    const products: Product[] = (await client.query(/*sql*/"SELECT * FROM Product")).rows;

    let returnMessage: Message = {

        success: true,

        message: "Product information",

    };
    
    res.status(200).json({

        result: products,

        message: returnMessage
        
    });

};

getProductsRoute.get('/getProducts', async function (req: Request, res: Response) {

    await getProducts(req, res);
    
});