import express from "express";
import morgan from "morgan";
import endpoints from "../paths/endpoints.js";
import transactionsRouter from "./routers/transactionsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(endpoints.transactions, transactionsRouter);

export default app;
