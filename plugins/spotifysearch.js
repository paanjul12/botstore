let fetch =  require('node-fetch')

let handler = async (m, { conn, command, usedPrefix, text }) => {
  if (!text) throw `Ketik ${usedPrefix + command} judul lagu dan penyanyinya 

Contoh : ${usedPrefix + command} oh asmara kobo kanaeru`
   await m.reply('Tunggu Sebentar...')
  const response = await fetch(`https://myvin.me/spotify/play?q=${text}`)
  if (!response.ok) throw `Gagal memanggil API: ${response.statusText}`

  const buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'audio.mp3', '', m, 0, { mimetype: 'audio/mp4' })
}

handler.help = handler.command = ['spotifysearch']
handler.tags = ['downloader']
handler.limit = true

module.exports = handler