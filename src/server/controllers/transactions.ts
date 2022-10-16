import { RequestHandler } from "express";

export const getTransactions: RequestHandler = (req, res, next) => {
  res.status(200).json({ ok: true });
};
