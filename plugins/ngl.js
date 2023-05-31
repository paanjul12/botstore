const axios = require("axios")

let handler = async (m, { conn, args }) => {
	let response = args.join(' ').split('|')
	if (!args[0]) throw 'Masukkan Username dan Pesan!'
setInterval (async() => {
let { data } = await axios.post("https://ngl.link/api/submit", 
"username=${response[0]}&question=${response[1]}&deviceId=18d7b980-ac6a-4878-906e-087dfec6ea1b&gameSlug=&referrer=")
console.log(data)
}, 2000)
}

handler.help = ['ngl']
handler.tags = ['tools']
handler.command = /^(ngl)$/i
handler.premium = true

module.exports = handler