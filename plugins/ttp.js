const api = require('api-dylux');
async function handler(m, {
 text, 
 usedPrefix, 
 command
 }) {   
  if (!text) throw `Masukan Text`
  await m.reply('Tunggu Sebentar...')
  api.ttp(text)
  .then(res => conn.sendFile(m.chat, res.result, 'sticker.webp', '', m))
  .catch(console.error);
}        
handler.command = handler.help = ['ttp']
handler.tags = ['sticker']
module.exports = handler