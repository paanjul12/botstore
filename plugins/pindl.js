const fetch = require("node-fetch");

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw 'Masukkan URL!'
	let dann = await fetch(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=dannlaina&url=${text}`)
	let res = await dann.json()
	conn.sendFile(m.chat, res.result, 'pinterest.mp4', '2023 © Dann-MD', m)
}
handler.help = ['pindl']
handler.tags = ['downloader']
handler.command = /^(pindl)$/i

module.exports = handler

/*
    * Dann Official
    * ig: @dannalwaysalone
*/