let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
	let url = 'https://api.saipulanuar.my.id/api/bokepig?apikey=9vxw5GqJ'
	conn.sendButton(m.chat, 'Nih kak!', wm, await(await fetch(url)).buffer(), [['Next', '.bokepig']], m)
}
handler.command = /^(bokepig)$/i
handler.tags = ['asupan']
handler.help = ['bokepig']
handler.premium = true

module.exports = handler