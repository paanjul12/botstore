let handler = async (m, { conn, text }) => {
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/playstore?apikey=dannlaina&query=${text}`, 'playstore.jpg', 'Nih kak\n2023 © Dann-MD', m)
}
handler.help = ['playstore']
handler.tags = ['internet']

handler.command = /^(playstore|appstore)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler