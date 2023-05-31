let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/asupantiktok?apikey=e6acac24b9', 'asupan.mp4', '2023 © Dann-MD', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler