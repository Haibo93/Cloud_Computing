import express from 'express';
import { Request, Response } from 'express';
import { client, Message } from './main';

export const newOrderRoute = express.Router();

interface Product {
    product_id: number;
}

async function addNewOrder(req: Request, res: Response) {
    // Check product_id exists in database and assign id to variable
    const products: Product[] = (await client.query("SELECT * FROM Product where id = $3"
        , [req.body.product_id])).rows;

    const productFound = products[0];

    // Create message object to handle response status code and message
    let returnMessage: Message = {
        success: true,
        message: "",
    };

    // As long as the product_id is valid, add the order to the database and return message and status code
    if (typeof productFound !== "undefined") {
        await client.query(/*sql*/`INSERT INTO Orders (id, user_id, product_id, order_date) VALUES 
                ($1, $2, $3, CURRENT_TIMESTAMP))`, [req.body.id, req.body.user_id, req.body.product_id]);
                returnMessage.message = "Order placed.";
                res.status(200).json(returnMessage);
    // Return status code and message if the initial check did not return valid product_id
    } else {
        res.status(400).json({ message: 'Product ID not recognised.' });
    }
}

// Route to run above function
newOrderRoute.post('/user/id/newOrder', async function (req, res) {
    await addNewOrder(req, res);
})