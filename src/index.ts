import "./loadEnvironment.js";
import Debug from "debug";
import chalk from "chalk";
import startServer from "./server/startServer.js";
import CustomError from "./error/CustomError.js";

const debug = Debug("cuentas-back:root");

const port = process.env.PORT || 4003;

try {
  await startServer(+port);
  debug(chalk.green(`Server listening on http://localhost:${port}`));
} catch (error) {
  debug(chalk.red(`Error on server`));
  debug(
    chalk.red(
      (error as CustomError).code === "EADDRINUSE"
        ? `Port ${port} in use`
        : (error as CustomError).message
    )
  );
}
