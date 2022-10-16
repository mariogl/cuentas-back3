import fs from "fs";
import childProcess from "child_process";
import util from "util";
import path from "path";

const childProcessExec = childProcess.exec;
const exec = util.promisify(childProcessExec);

console.log("\n\x1b[33mExecuting pre-commit hook...");

const preCommit = async () => {
  const staggedFiles = await exec("git diff --cached --name-only");

  const staggedFilesWithJsOrTs = staggedFiles.stdout
    .split("\n")
    .filter((staggedFile) => /.(ts|js)(x?)$/.test(staggedFile));

  staggedFilesWithJsOrTs.forEach((staggedFile) => {
    if (path.dirname(staggedFile) === "scripts") {
      return;
    }

    const readFile = fs.readFileSync(staggedFile, "utf8").trim();

    if (/console\.(clear|dir|log|info|warn|error)/.test(readFile)) {
      console.log(
        `\n\x1b[31mCOMMIT REJECTED!  Found console references in ${staggedFile}. Please remove them before committing.\n`
      );
      process.exit(1);
    }

    if (readFile.includes("debugger")) {
      console.log(
        `\n\x1b[31mCOMMIT REJECTED!  Found debugger references in ${staggedFile}. Please remove them before committing.\n`
      );
      process.exit(1);
    }
  });

  console.log("\n\x1b[32mNo console. or debugger references found!\n");
  console.log("\x1b[32mGit pre-commit hook was successful!\n");

  process.exit(0);
};

preCommit();
