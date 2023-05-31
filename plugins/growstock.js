let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Query!\n\nContoh: ${usedPrefix + command} magplant`
	let dann = await fetch(`https://api.lolhuman.xyz/api/growstocks?apikey=Fairlovely&query=${text}`)
	let res = await dann.json()
	let hasil = `Nama: ${res.result.name}\nDeskripsi: ${res.result.desc}\nPrice: ${res.result.price_status}\nDemand = ${res.result.demand_status}\nEdited: ${res.result.edited}\n\nSource: ${res.result.source}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=Fairlovely&query=growtopia%20${text}`
	await conn.sendFile(m.chat, res.result.img, 'growstock.jpg', `${hasil}`, m)
}

handler.help = ['growstock']
handler.tags = ['internet']
handler.command = /^(growstock)$/i

module.exports = handler