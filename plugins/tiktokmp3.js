let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
 let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = `*Tiktok Downloader*\n\nAuthor : ${jsoon.author}\nPlay : ${jsoon.playCount}\nPublish : ${jsoon.createdAt}\nLikes : ${jsoon.likesCount}\nComment : ${jsoon.commentCount}\nShares : ${jsoon.shareCount}\n\nDescription:\n${jsoon.description}\n\n_Sedang mengirim *Audio*..._`
await m.reply(done)
await conn.sendFile(m.chat, json.audio, 'error.mp3', null, m, true, {
type: 'audioMessage',  
ptt: false, seconds: 0,contextInfo: { 
forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: sig, 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(json.pp)).buffer(),
 thumbnailUrl: sgc,
 title: json.username }}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
module.exports = handler

/*
  * Dann Official
  * ig: @dannalwaysalone
*/