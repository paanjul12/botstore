let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://saipulanuar.ga/api/photooxy/naruto?text=${response[0]}`
  conn.sendFile(m.chat, res, 'naruto.jpg', `Nih kak`, m, false)
}
handler.help = ['naruto'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(naruto)$/i
handler.limit = false

module.exports = handler