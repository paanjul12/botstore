let handler = m => m
handler.before = async (m, { conn, isPrems, owner }) => {
	if (isPrems) {
    if (new Date() * 1 >= global.db.data.users[m.sender].premiumDate) {
      conn.reply(m.chat, "*Maaf waktu untuk status premium anda telah berakhir!*\n*Chat owner untuk upgrade premium lagi*", m).then(() => {
        global.db.data.users[m.sender].premium = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
        this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
           })
        }
      }
   }
module.exports = handler