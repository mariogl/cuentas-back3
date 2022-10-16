import express from "express";
import cors from "cors";
import morgan from "morgan";
import endpoints from "../paths/endpoints.js";
import transactionsRouter from "./routers/transactionsRouter.js";
import categoriesRouter from "./routers/categoriesRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(endpoints.transactions, transactionsRouter);
app.use(endpoints.categories, categoriesRouter);

export default app;
