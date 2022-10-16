import fs from "fs";

async function checkCommitMessage() {
  const message = fs.readFileSync(process.argv[2], "utf8").trim();

  if (message.length < 10 || message.length > 72) {
    console.log(
      "\x1b[31m(ERROR) The length of the commit message has to be between 10 and 72 characters."
    );
    process.exit(1);
  }
  console.log("\x1b[32mCommit message OK");
  process.exit(0);
}

checkCommitMessage();
