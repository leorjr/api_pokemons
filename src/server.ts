import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config()

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (request: Request, response: Response) => {
    response.status(200).json({ message: "teste" })
})

app.listen(port, () =>
    console.log(`server is running at http://localhost:${port}`)
)