import handle from "./handle.js";
import chalk from "chalk";


async function createPassword() {
    console.log(chalk.white("Password"));
    const password = await handle();
    console.log(password);
}

export default createPassword;