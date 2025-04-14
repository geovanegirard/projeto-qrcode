import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.underline("Escolha apenas entre as opções 1 e 2"),
        require: true,
    },
];

export default promptSchemaMain;