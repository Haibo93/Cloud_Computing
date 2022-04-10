import express from 'express';
import { Request, Response } from 'express';
import expressSession from 'express-session';
import path from 'path';
import { Client } from 'pg';

const app = express();

// connecting the database to the server
export const client = new Client({
    database: process.env.DATABASE_URL
    // user: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD
});
client.connect();

// setting up cookies for clients such that server could recognize the session of each request 
app.use(expressSession({
    secret: 'Cloud Computing Group Project',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req: Request, res: Response) {
    res.sendFile(path.resolve('./public/landing.html'))
});

import { registerUserRoute } from './registerUser';
import { loginUserRoute } from './loginUser';
import { logOutUserRoute } from './logOutUser';
import { getProductsRoute } from './getProducts';
import { adminAddProductRoute } from './adminAddProduct';
import { adminDeleteProductRoute } from './adminDeleteProduct';
import { adminUpdateProductRoute } from './adminUpdateProduct';
import { userAddOrderRoute } from './userAddOrder';
import { userDeleteOrderRoute } from './userDeleteOrder';
import { userGetOrdersRoute } from './userGetOrders';
import { userUpdateProfileRoute } from './userUpdateProfile';
import { getLogInStatusRoute } from './getLogInStatus';
import { userGetDetailsRoute } from './userGetDetails';

app.use(registerUserRoute);
app.use(loginUserRoute);
app.use(logOutUserRoute)
app.use(getProductsRoute);
app.use(getLogInStatusRoute);
app.use(userGetDetailsRoute);
app.use(userAddOrderRoute);
app.use(userDeleteOrderRoute);
app.use(userGetOrdersRoute);
app.use(userUpdateProfileRoute);
app.use(adminAddProductRoute);
app.use(adminDeleteProductRoute);
app.use(adminUpdateProductRoute);

app.use(express.static('public'));

app.listen(process.env.PORT || 5000);
