let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan ID!\n\nContoh: ${usedPrefix + command} 6290150021186841472`
	let dann = await fetch(`https://api.lolhuman.xyz/api/codm/${text}?apikey=dannlaina`)
	let hasil = await dann.json()
	m.reply(`${hasil.result}`)
   console.log(hasil)
}
handler.help = ['codstalk']
handler.tags = ['internet', 'tools']
handler.command = /^(codstalk)$/i
handler.limit = true

module.exports = handler

/*
  * Dann Official
  * Instagram: @dannalwaysalone
*/