let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text!'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/gtapassed?apikey=64333e1c050ced435defe154&text1=${response[0]}&text2=${response[1]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'dann.jpg', `${global.wm}`, m, false)
}
handler.help = ['gta'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(gta)$/i
handler.limit = true
handler.premium = true

module.exports = handler

/*
  * Dann Official
  * ig: @dannalwaysalone
*/