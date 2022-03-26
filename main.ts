import express from 'express';
import {Request, Response} from 'express';
import path from 'path';

const app = express();

app.get('/', function(req: Request, res: Response) {
    res.sendFile(path.resolve('./public/index.html'))
});

app.use(express.static('public'));

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`Listening at http://localhost:${PORT}`)
});
