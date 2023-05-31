let fetch = require('node-fetch')

let handler = async (m, { conn,  text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Url!\nContoh: ${usedPrefix + command} https://www.happymod.com/garena-free-fire-max-app-mod/com.dts.freefiremax`
	let dann = await fetch(`https://api.zahwazein.xyz/webzone/happymod/download?url=${text}&apikey=e6acac24b9`)
	let res = await dann.json()
    conn.sendFile(m.chat, res, 'happymod.apk', 'Nih', m)
}
handler.help = ['happymoddl'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^happymoddl$/i
handler.premium = false

module.exports = handler
/*
  * Dann Official
  * Instagram: @dannalwaysalone
*/