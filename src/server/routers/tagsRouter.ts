import express from "express";
import { getTags } from "../controllers/tags.js";

const tagsRouter = express.Router();

tagsRouter.get("/", getTags);

export default tagsRouter;
