let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomanime/v2/elaina?apikey=e6acac24b9', 'elaina.jpg', 'Nih kak\n2023 © Dann-MD', m)
}
handler.help = ['elaina']
handler.tags = ['maker']

handler.command = /^(elaina|elaine)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler