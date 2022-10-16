import express from "express";
import { getCategories } from "../controllers/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);

export default categoriesRouter;
