let fetch = require('node-fetch')

let handler = async (m, { conn,  text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Query!\nContoh: ${usedPrefix + command} spotify`
	let dann = await fetch(`https://api.zahwazein.xyz/webzone/moddroid?query=${text}&apikey=e6acac24b9`)
	let res = await dann.json()
    const hasil = res.result.map((v, i) => `${v.img}\n${v.name}\n${v.desc}\n${v.link}\n`).join('\n')
	await conn.sendButton(m.chat, hasil, wm, 'https://telegra.ph/file/d59776ea4b0efb0879167.jpg', [['Download', `.google mod ${text}`]], m)
}
handler.help = ['moddroid']
handler.tags = ['downloader', 'internet']

handler.command = /^moddroid$/i
handler.premium = false

module.exports = handler

/*
  * Dann Official
  * Instagram: @dannalwaysalone
*/