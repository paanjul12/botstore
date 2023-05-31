let handler = async (m, { conn, text, isROwner, command }) => {
   if (!text) throw 'Masukkan nama file yang ingin di backup!'
   let backup = `$ tar -cvf ${text} ..`
   await m.reply('Sedang backup...')
   conn.sendFile(m.chat, backup, 'backup.zip', '', m)
}

handler.help = ['backupsc']
handler.tags = ['owner']
handler.command = /^(backup(sc)?)$/i

handler.rowner = true

module.exports = handler