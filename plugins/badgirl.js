let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Text!'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/badgirl?apikey=dannlaina&name=${text}`
  conn.sendFile(m.chat, res, 'badgirl.jpg', `Nih kak`, m, false)
}
handler.help = ['badgirl'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^badgirl$/i
handler.limit = false

module.exports = handler