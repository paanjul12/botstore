let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

  let teks = `${htjava} Pilih Preset kak !\n${htjava} *Preset Alight Motion*`
const sections = [
   {
	title: `${htki} PRESET MENU ${htka}`,
	rows: [
	{title: "▢ Preset 1", rowId: ".p1"},
    {title: "▢ Preset 2", rowId: ".p2"},
	{title: "▢ Preset 3", rowId: ".p3"},
	{title: "▢ Preset 4", rowId: ".p4"},
	{title: "▢ Preset 5", rowId: ".p5"},
	{title: "▢ Preset 6", rowId: ".p6"},
	{title: "▢ Preset 7", rowId: ".p7"},
	{title: "▢ Preset 8", rowId: ".p8"},
	{title: "▢ Preset 9", rowId: ".p9"},
	{title: "▢ Preset 10", rowId: ".p10"},
]
    },{
	title: `${htki} SUPPORT ${htka}`,
	rows: [
	    {title: "Donasi", rowId: ".owner nomor"},
	{title: "Sewa", rowId: ".sewa"},
	{title: "Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *PRESET MENU* ${htka}`,
  buttonText: "Click Here",
  sections
}

  try {
    if (/(presetmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, ['Menu', '.menu'], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['presetmenu']
handler.tags = ['tools']
handler.command = /^(presetmenu)/i


module.exports = handler