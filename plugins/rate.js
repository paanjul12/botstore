let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Rating'

  let img = 'https://telegra.ph/file/d59776ea4b0efb0879167.jpg'
  let rate = 'Berikan rating dibawah button ini agar bot bersemangat diperbaiki!'
  let sukses = 'Terima kasih atas ratingnya!'

  let rating
  try {
    rating = parseInt(text)
  } catch (e) {
    throw 'Rating harus berupa angka'
  }
  
  switch (rating) {
    case 5:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.sendButton(m.chat, sukses, wm, img, [['5 STAR', '.rate5']], m)
      break
    case 4:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.sendButton(m.chat, sukses, wm, img, [['4 STAR', '.rate4']], m)
      break
    case 3:
      conn.sendMessage(m.chat, rate, { quoted: m })
      conn.sendButton(m.chat, sukses, wm, img, [['3 STAR', '.rate3']], m)
      break
    default:
      throw 'Rating harus berupa angka antara 3-5'
  }
}

handler.help = ['rate']
handler.tags = ['tools']
handler.command = /^(rate|rating)$/i

module.exports = handler