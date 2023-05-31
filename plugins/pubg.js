let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://saipulanuar.ga/api/maker/pubeje?text=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pubg.jpg', `Nih kak`, m, false)
}
handler.help = ['pubg'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(pubg)$/i
handler.limit = false

module.exports = handler