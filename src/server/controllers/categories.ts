import { RequestHandler } from "express";
import Category from "../../database/models/Category.js";

export const getCategories: RequestHandler = async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({ categories });
};
