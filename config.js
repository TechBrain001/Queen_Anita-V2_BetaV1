//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "apehsunday193@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/HdnV4UbtfSOFNORtbKW3p6";
global.website = process.env.GURL || "https://chat.whatsapp.com/HdnV4UbtfSOFNORtbKW3p6";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/techbrin";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349158564687";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFlRk9YbUF0ZTcyd3VHRElGUmFaMVNheVFyKzZwNGVOM05uUmpDM29WWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdTcmdQL0NhZndHUnJxVTNURHdnQXZ2c29NVDJxazRFOEVsOWQxQmZoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSDBLOHh5OVVLd2RBeXY3YkcyV2tvYW90VEpGTUpIWkVrS2ljd3NmM1d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWHJFenIrTFRpSUdLekVEU2IvQ0hPeW91OXlPOEFCQmlmbTFhTE8zMkVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HWnk1LzQvVzlCWEZXNTVCeXRmWVBjWUM5U0JyTmRTWjZBSHBieC9wMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBUQkpJb1QwSC9WVHowcU9RMUJrd0VEaWVGQ2NCbUV5NmlPc0RCR0E5M009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME53WlFoek1qTWd2Z3pGVHVWUUZBUzhKRDc5d2lsMFZMWDdOaHJrZmkzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0IyNStyQXZvUXRBcWxBTjB3cWFDY3diV2pBbXpUUzBZZ1JpdGJvYXNYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ3SjhPaHJNQlowdmFWaTRtT3VlVE1KS3drWUovcmN6a0U5Qm55R0w4Y1pqUkdJcXBiMUNLdithSmZjcnFWSFJVbkkvWnVIYXFEb0liQkcyR2pwU2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6Ik1RdkFuODdha1pnUDJwVzZicHJNRGR6SkQ3cDN1cDdHWExmQUlhU3dvUUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijd3V1kwWHJsUS0tOU5kWldTNnhWOWciLCJwaG9uZUlkIjoiMGNjOTNmZjYtMmU2Zi00YTJmLTk2NzktNjQ1N2Y5ZTc0MjY5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdMeTJINmdGaGI5SFgxRUMvUy9rNElWNE4rYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUy9UWGhGeUhmaUJ5WjJWS0tHNDBOT2RRR0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTTNUS0VETTUiLCJtZSI6eyJpZCI6IjIzNDkxNTg1NjQ2ODc6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUZWNoQnJhaW4gTWVkaWEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lEbThRNFFsZE9DdGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFPcDc5WjBqSUs0bmRuSUdURnBxZkI4TS95dEZkN3FDNk52SUd1UUJ0V2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9jbVVQTTlyL2wrOElWcyszRFFEdjU0N0prcWRycmprelVrclU0RnRMMUtBOFQyUXJmdlU4NkRsZE5CN2VaOWRGa1huczM4T1NqY3YzRi9iM0FFR0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSL0FSMkFhQVJtc3d3UDRMZk9vci81NnNFTWlRWE00MUtYN0gxbHcyZlNYMEM4Z0pxYllZZmwyZTZzNkNBRUFVdTJsbk9ya0xqR3BPWTJJMC9LZGFpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTg1NjQ2ODc6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRHFlL1dkSXlDdUozWnlCa3hhYW53ZkRQOHJSWGU2Z3VqYnlCcmtBYlZwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzOTAyMzcwfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "TechBrain Media",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
