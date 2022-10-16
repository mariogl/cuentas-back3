import "../../loadEnvironment.js";
import Debug from "debug";
import fs from "fs";
import readXlsxFile from "read-excel-file/node";
import chalk from "chalk";
import xlsxSchema from "../schemas/xlsxSchema.js";
import Transaction from "../../database/models/Transaction.js";
import { RequestHandler } from "express";

const debug = Debug("cuentas-back:server:controllers:xlsx");

const loadXLSX: RequestHandler = async (req, res, next) => {
  const file = req.file.path;
  try {
    const { rows: transactionsXlsx } = await readXlsxFile(file, {
      schema: xlsxSchema,
    });

    debug(
      chalk.blue(
        `Extrayendo ${transactionsXlsx.length} transacciones del archivo importado`
      )
    );
    const transactions = (
      transactionsXlsx as {
        date: string;
        description: string;
        quantity: number;
        balance: number;
      }[]
    ).map(({ date, description, quantity, balance }) => {
      const dateParts: string[] = date.split("/");
      const newTransaction = {
        date: new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0], 4),
        description,
        quantity,
        balance,
      };

      return newTransaction;
    });

    let transactionsImported = 0;

    for (const transaction of transactions) {
      const transactionExists = await Transaction.findOne({
        date: transaction.date,
        description: transaction.description,
        quantity: transaction.quantity,
        balance: transaction.balance,
      });
      if (!transactionExists) {
        await Transaction.create(transaction);
        transactionsImported += 1;
      } else {
        debug(chalk.red("Existe:"));
        debug(chalk.red(transactionExists));
      }
    }

    fs.unlinkSync(file);

    res.json({
      transactionsRead: transactionsXlsx.length,
      transactionsImported,
    });
  } catch (error) {
    debug(chalk.red(error.message));
    next(error);
  }
};

export default loadXLSX;
