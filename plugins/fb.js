let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!args[0]) throw `Linknya?`
  let res = await fetch(`http://api.lannn.me/api/download/fbdown?url=${args[0]}&apikey=P5hoOJWE`)
  let x = await res.json()
  m.reply('Tunggu Sebentar...')
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.result.Normal_video, 'fb.mp4', cap, m)
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}