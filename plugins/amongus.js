let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/amongus?apikey=31fe0c7b7761a4dcb6d8e227&text=${response[0]}`
  conn.sendFile(m.chat, res, 'amongus.jpg', `Nih kak`, m, false)
}
handler.help = ['amongus'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(amongus)$/i
handler.limit = false

module.exports = handler