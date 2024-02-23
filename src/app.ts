import express from "express";
import { router } from "./routes/router";

const app = express();
app.use(express.json());

router(app)

export {
    app
};


