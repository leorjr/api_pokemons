import express, { Request, Response } from "express";

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.status(200).json({ message: "teste" })
})

app.listen(3000, () =>
    console.log(`server is running at http://localhost:${3000}`)
)