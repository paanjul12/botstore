let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
// FAKE KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; DannLonely\nNICKNAME:👑 Developer\nORG: DannXD\nTITLE:soft\nitem1.TEL;waid=6283861639366:+62 838-6163-9366\nitem1.X-ABLabel:Contact Owner\nitem2.URL:https://wa.me/+6283861639366\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: danigtps@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nBDAY;value=date:📮20 Desember 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fcon })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih owner saya kak. Jangan dispam yah.`
    await conn.sendButton(m.chat, caption, wm, null, [['Menu', '.menu']], m, { quoted: fcon, mentions: conn.parseMention(caption) })
}
if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6283861639366:+62 838-6163-9366\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:Note: Jangan dispam yah kak\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fcon })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku, jangan di spam yah kak`,m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner)$/i

module.exports = handler