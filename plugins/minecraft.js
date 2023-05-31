let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Server!\n\nContoh: ${usedPrefix + command} org.mc-complex.com`
	let dann = await fetch(`https://api.lolhuman.xyz/api/minecraft/${text}?apikey=dannlaina`)
	let res = await dann.json()
	let hasil = `Version: ${res.result.version}\nPlayers: ${res.result.players.online} & ${res.result.players.max}\nLatency: ${res.result.latency}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=dannlaina&query=${text}`
	await conn.sendButton(m.chat, hasil, wm, thumb, [['Menu', '.menu']], m)
}

handler.help = ['minecraft']
handler.tags = ['internet']
handler.command = /^minecraft$/i

module.exports = handler