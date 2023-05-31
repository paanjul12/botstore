let handler = async (m, { conn, usedPrefix, participants }) => {
  conn.level = global.db.data.users[m.sender]
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res=>setTimeout(res,time));
  let thumb = 'https://telegra.ph/file/22384cfe132439a632d9e.jpg'

  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) throw `Clan kamu sudah kecapekan berperang\n\nTunggu ${msToTime(time - new Date())} lagi`
 
  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(1,1)

  m.reply(`Kamu dan ${conn.getName(lawan)} dan sedang dalam pertarungan sengit.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang.`)

  conn.fight[m.sender] = true

  await delay(1 * 1 * lamaPertarungan)
  
  let kesempatan = []
  for (i=0;i<global.db.data.users[m.sender].money;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.data.users[lawan].money;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 10000
    global.db.data.users[m.sender].money += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    let menang = `*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nKamu Menang* melawan level [${pointLawan * 10}] \n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`
    conn.sendFile(m.chat, thumb, 'war.jpg', menang, m)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    let kalah = `*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nKamu *Kalah* melawan level [${pointLawan * 10}]\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`
    conn.sendFile(m.chat, thumb, 'war.jpg', kalah, m)
  }else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`)
  }

  delete conn.fight[m.sender]
}
handler.help = ['clanwar']
handler.tags = ['game']
handler.command = /^(clanwar)$/i
handler.limit = true
handler.group = true

module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}