import prompt from "prompt";

import mainPrompt from "./prompts/prompt-main.js";
import creatQRCode from "./services/qr-code/creat.js";

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await creatQRCode();
        if(choose.select == 2) console.log("Escolheu o Password.");
    });
    
    prompt.start();
}

main();