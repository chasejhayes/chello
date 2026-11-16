// import express from 'express'
// import type { Application, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config()

// const app = express();


// app.use(express.json())

// app.get('/api/health', (req: Request, res: Response) => {
//     res.json({status: 'ok', message: 'TS express server is running'});
// })



import app from "./server";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on localhost ${PORT}`)
})