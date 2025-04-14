import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js";


async function creatQRCode() {
    prompt.get(promptQRCode, handle);

    prompt.start();
}

export default creatQRCode;