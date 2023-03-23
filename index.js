import chalk from "chalk";

export const log = (args) => {
  info(args);
};

export const info = (args) => {
  console.log(
    chalk.white.bgBlue.bold(`[${new Date().toLocaleString()}] [INFO]`),
    typeof args === "string" ? chalk.blueBright(args) : args
  );
};

export const warning = (args) => {
  console.log(
    chalk.white.bgYellow.bold(`[${new Date().toLocaleString()}] [WARN]`),
    typeof args === "string" ? chalk.yellowBright(args) : args
  );
};

export const error = (args) => {
  console.log(
    chalk.white.bgRed.bold(`[${new Date().toLocaleString()}] [ERROR]`),
    typeof args === "string" ? chalk.redBright(args) : args
  );
};
