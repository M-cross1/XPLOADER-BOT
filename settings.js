  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUw0SkVCTUdOcm92YUdvRzBReGRGKzNJYnpTU0ZGYkFna0JwSFMyVU0zbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2IzM2ZDd2FqTmJuekt3ak1tNG9uRWowaEtQNzg0dW9PZUlmeEZ6Z3pTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUGVjVmQ5eGxiZXAwNktQa0J2VUJoM2M0eDl5WVZ0QUpnejRkczBRUTFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q0JYQnJtd0tKMWdxMXlGWFBxdHZCOFhIdXl5aXhoWnFHb2pVU0tVN2w0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEWDhOQk11eE1DT1loZTNtV2RIS3BNbEYwL1l3b3k5em1rM2FZeWFsSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4MStIVTJnTlZUOU1JVHNWd0tRa09RRUFKcG1xV2h2aFJpWFRRSU5vWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBFUml4bTBBaVFvK3RvRi9IS3BLQkV0K0NuQlU0c0YxOUE2Z1d3S29sWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREZoVHpoVVVNY2QyNlFzRFRLaFNHQkY3eEE1a2wrMzFDMGVMaGZteGRtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB0QUx4SEtFbngwK3JEcDh5ZU9sUzJrYzc1YVlMeC9rKzF6d1YzOGxnMGM4bUVrOUFOU2E5aWpwWERVMkVoOWZWZVVmWDh2T1B0U201VzFMREpDVWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6IjhTTmRIelM4UUt6d3hNWXY1dkJEWTlmb1lVQTViSkJFTGpiWHoyRUV5MDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA0MjU2NjQ3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMzk1MjI1NDFEMTRDQzFBOEZFNzNFRDQ2MDREQUZEOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1NjEzMjg2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDQyNTY2NDczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgxQzZFM0FBMkZGNjU1QzE3QjVDN0M5N0M5RDk3Q0YwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU2MTMyODl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNNdXR6SmdvUnYyN0ppbXpOblVuN2ciLCJwaG9uZUlkIjoiZmRlYTBiZWEtNzcyNi00MGZlLTlmZDgtNjUzNGU0MzJjZjAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFqQ2R6RWxJRHRmOTdudlloV2NCL01pVlYvVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnZkQwRDBFVGNhQ0s0Z1AzZHh5eGtFZ2tLTUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjI3WjRLUjMiLCJtZSI6eyJpZCI6IjIzNDkwNDI1NjY0NzM6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxMTA4OTYyMzA5NzUyMzoxQGxpZCIsIm5hbWUiOiLjhaTjhaTjhaTjhaQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzRTVOOEJFTksyemJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlB6ZXRReVdVNEM3dHkwajFZYWhCRHpsVkZKbXVxaVdMNTZPQXp1a2dYVXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBOVXdFak9wY3pNUitnaTNmTkxWQmRJU283WDVSR0VObkR2ekVOdVpLSWtPL0JjQ2oxNHJDdTIvc09GcDhEeTA0Z3R6bE5xWkJnTHZxNU9PRTMvK0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwcDJxclpvN3Z1a0ZzOTVYWEZZQ214VmZhcFRVMVpBM20rRVprRjVWZHN4VmNMMVB6aGxONjJsejZRejgrQXduMnlaMVNQWm1abkhsQUtrZ1E0cXFpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDI1NjY0NzM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUODNyVU1sbE9BdTdjdEk5V0dvUVE4NVZSU1pycW9saStlamdNN3BJRjFMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NjEzMjgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZVRyJ9' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'M-CROSS' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '2349042566473' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'M-cross' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©M-cross"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "Miracle" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "M-cross" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'private';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '👻'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Lagos" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '234' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*© M-cross 𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
