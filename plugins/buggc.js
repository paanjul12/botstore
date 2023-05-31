let handler  = async (m, { conn }) => {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363025461390219@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": ` ꪶ𝐅𝐞𝐥𝐢𝐜𝐢𝐚𝐃𝐞𝐯⿻ꫂ`,
"groupName": `ꪶ𝐅𝐞𝐥𝐢𝐜𝐢𝐚𝐃𝐞𝐯⿻ꫂ`,
"caption": `ꪶ𝐅𝐞𝐥𝐢𝐜𝐢𝐚𝐃𝐞𝐯⿻ꫂ`
 }
   }
}

await conn.reply(m.chat, `2023 © Dann-MD`, main)
}
handler.help = ['buggc']
handler.tags = ['tools']
handler.command = /^buggc$/i

handler.owner = true

module.exports = handler