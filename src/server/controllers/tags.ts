import { RequestHandler } from "express";
import Tag from "../../database/models/Tag.js";

export const getTags: RequestHandler = async (req, res, next) => {
  const tags = await Tag.find();
  res.status(200).json({ tags });
};
