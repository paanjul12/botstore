const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async (m, { conn, text, participants }) => {
  // FAKE KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
	let q = text
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id) }, fcon)
}

handler.help = ['hidetag'].map(v => v + ' <teks>')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i
handler.limit = true
handler.group = true
handler.admin = true

module.exports = handler