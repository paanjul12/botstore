let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text=${response[0]}`
  conn.sendFile(m.chat, res, 'iluminated.jpg', 'Nih kak!', m, false)
}
handler.help = ['iluminated'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(iluminated)$/i

module.exports = handler