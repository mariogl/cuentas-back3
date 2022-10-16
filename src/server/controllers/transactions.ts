import { RequestHandler } from "express";
import Transaction from "../../database/models/Transaction.js";

export const getTransactions: RequestHandler = async (req, res, next) => {
  const transactions = await Transaction.find()
    .sort({ date: "desc" })
    .populate("category");
  res.status(200).json({ transactions });
};
