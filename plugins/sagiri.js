let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=dannlaina', '', '', m)
}
handler.help = ['sagiri']
handler.tags = ['maker']
handler.command = /^(sagiri)$/i

module.exports = handler