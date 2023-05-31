let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Url!'
  let dann = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=dannlaina&url=${text}`)
  let res = await dann.json()
  await m.reply('Tunggu Sebentar...')
  let hasil = `Judul: ${res.result.title}\nTag: ${res.result.tag}\nLike: ${res.result.likes}\nViews: ${res.result.views}\nUploader: ${res.result.uploader}\nDurasi: ${res.result.duration}`
  conn.sendFile(m.chat, res.result.nowm, 'cocofun.mp4', `${hasil}`, m)
}
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^cocofun$/i
handler.premium = false

module.exports = handler