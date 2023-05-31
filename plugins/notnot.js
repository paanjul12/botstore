let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/notnot?apikey=e6acac24b9', 'asupan.mp4', 'Nih kak\n2023 © Dann-MD', m)
}
handler.help = ['notnot']
handler.tags = ['asupan']

handler.command = /^(notnot|ntnt)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler