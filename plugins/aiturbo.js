let fetch = require('node-fetch')
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw 'Mau nanya apa?'
let dann = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let hasil = await dann.json()
 m.reply(`${hasil.data.data}`.trim())
    }  
handler.help = ['ai2', 'aiturbo']
handler.tags = ['internet','tools']
handler.command = /^ai(turbo|2)$/i
module.exports = handler