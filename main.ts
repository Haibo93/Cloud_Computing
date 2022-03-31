import express from 'express';
import {Request, Response} from 'express';
import expressSession from 'express-session';
import path from 'path';
import {Client} from 'pg';
import dotenv from 'dotenv';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// connecting the database to the server
dotenv.config();
export const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
client.connect();

// setting up cookies for clients such that server could recognize the session of each request 
app.use(expressSession({
    secret: 'Cloud Computing Group Project',
    resave: true,
    saveUninitialized: true
}));

export interface Message {
    success: boolean;
    message: string;
}

app.get('/', function(req: Request, res: Response) {
    res.sendFile(path.resolve('./public/index.html'))
});

app.use(express.static('public'));

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`Listening at http://localhost:${PORT}`)
});

