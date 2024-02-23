import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { router } from "./routes/router";

const app = express();
app.use(express.json());

router(app)

app.use(errorHandler)

export {
    app
};


