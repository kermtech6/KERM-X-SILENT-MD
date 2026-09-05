/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674/
YT: KermHackTools
Github: Kgtech-cmr
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PUT YOUR SESSION ID HERE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/BpC2NJj.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",  
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com

// ============ NOUVELLES VARIABLES AJOUTÉES ============
STATUS_REACT: process.env.STATUS_REACT || "false",
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY: process.env.STATUS_REPLY || "Merci pour ton statut ❤️",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
READ_CMD: process.env.READ_CMD || "false",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // "log" = envoie en DM owner, sinon renvoie dans le chat d'origine
ANTI_CALL: process.env.ANTI_CALL || "false",
ANTI_SPAM: process.env.ANTI_SPAM || "false",
AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD || "false",
OWNER_NUMBER: process.env.OWNER_NUMBER || "",

// Shared Supabase Postgres database. Every deployment of this bot that
// doesn't set its own DATABASE_URL env var connects to this same database
// and the same tables (sudo, sticker commands, antidelete settings...).
// This is intentional: it lets anyone deploy the bot with zero database
// setup. Set DATABASE_URL as an env var on your own deployment if you want
// a private, isolated database instead.
DATABASE_URL: process.env.DATABASE_URL || "postgresql://postgres.ezxejajhkekvabanjisk:Emmanuelrayan666@aws-1-eu-west-1.pooler.supabase.com:5432/postgres",

// Used by .hd (image upscaling via Picsart). Empty by default — each
// deployer gets their own free key at https://picsart.io (200 free credits
// on signup) rather than sharing one, since usage is billed per-account.
PICSART_API_KEY: process.env.PICSART_API_KEY || "",
};
