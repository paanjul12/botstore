let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'Umur kamu belum cukup untuk mencari ini dek!';
	try {
		let res = await fetch(`https://bokepindo13.pro/?s=${text}`)
		let cap = `Hasil Pencarian Dari ${text}\n`
	 cap += `Link: https://bokepindo13.pro/?s=${text}
`
cap +=  '\n' + '================' + '\n'
  
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['bkpindo', 'bkpsearch'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^bkp(s?earch)?$/i

handler.register = true
handler.premium = true
handler.private = false

module.exports = handler