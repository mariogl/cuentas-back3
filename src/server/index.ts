import express from "express";
import cors from "cors";
import morgan from "morgan";
import endpoints from "../paths/endpoints.js";
import transactionsRouter from "./routers/transactionsRouter.js";
import categoriesRouter from "./routers/categoriesRouter.js";
import tagsRouter from "./routers/tagsRouter.js";
import xlsxRouter from "./routers/xlsxRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(endpoints.transactions, transactionsRouter);
app.use(endpoints.categories, categoriesRouter);
app.use(endpoints.tags, tagsRouter);
app.use(endpoints.xlsx, xlsxRouter);

export default app;
