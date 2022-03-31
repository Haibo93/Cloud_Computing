
import express from 'express';
import { Request, Response } from 'express';
import { client, Message } from './main';

export const newProduct = express.Router();

interface Product{
    id: number;
    name: string;
    cost: number;
}

async function addNewProduct(req: Request, res: Response) {
    await client.query(/*sql*/`INSERT INTO Products (id, name, cost) VALUES 
            ($1, $2, $3))`, [req.body.id, req.body.user_id, req.body.product_id]);
            returnMessage.message = "Product added.";
            res.status(200).json(returnMessage);
}
newProductRoute.post('/admin/newProduct', async function (req, res) {
    await addNewProduct(req, res);
})

async function editProduct(req: Request, res: Response) {
    // Check product_id exists in database 
    const products: Product[] = (await client.query("SELECT * FROM Product where id = $1"
        , [req.body.product_id])).rows;

    const productFound = products[0];

    // Create message object to handle response status code and message
    let returnMessage: Message = {
        success: true,
        message: "",
    };

    // As long as the product_id is valid, add update the product and return message and status code
    if (typeof productFound !== "undefined") {
        await client.query(/*sql*/`UPDATE Product (id, name, cost) VALUES 
                ($1, $2, $3, CURRENT_TIMESTAMP))`, [req.body.id, req.body.user_id, req.body.product_id]);
                returnMessage.message = "Product updated.";
                res.status(200).json(returnMessage);
    // Return status code
    } else {
        res.status(400).json({ message: 'Product ID not recognised.' });
    }
}

// Route to run above function
updateProductRoute.post('/admin/product', async function (req, res) {
    await editProduct(req, res);
})
