let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=Fairlovely')
let json = await res.json()
let dann = `Judul: ${json.result.title}

Deskripsi: ${json.result.desc}
Cerita: ${json.result.story}`

await conn.sendFile(m.chat, json.result.thumbnail, 'ceritahoror.jpg', `${dann}`, m)
}
handler.help = ['ceritahoror']
handler.tags = ['internet','fun']
handler.command = /^ceritahoror$/i

module.exports = handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/