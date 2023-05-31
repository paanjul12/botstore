let handler = async (m, { conn, text, usedPrefix, command }) => {

var dann = `Berikut ini adalah list panel dari *Dann-MD* ⤵️\n

Admin Menyediakan:
- Panel
- Vps
- Rdp
- Coins

• List *Panel* + *Vps* + *Rdp* ⤵️
📮 1GB | 30% Cpu
➡️ *3.000* / Bulan
📮 2GB | 50% Cpu
➡️ *6.000* / Bulan
📮 3GB | 70% Cpu
➡️ *10.000* / Bulan
📮 5GB | 110% Cpu
➡️ *20.000* / Bulan
📮 8GB | 170% Cpu
➡️ *30.000* / Bulan
📮 10GB | 210% Cpu
➡️ *40.000* / Bulan

• Kecepatan: 800 - 2.000 *Speed*
• Guarante: Tergantung Pemakaian
• Expired: 1 *Month*

• List Coins: 
🪙 100 Coins
➡️ 5.000
🪙 200 Coins
➡️ 10.000
🪙 300 Coins
➡️ 20.000
🪙 400 Coins
➡️ 30.000
🪙 500 Coins
➡️ 40.000

Ingin membeli? Chat ⤵️
https://wa.me/+6283137550315
Selain itu *Clone* !!

• Payment:
➡️ Dana, Gopay, Ovo, Qris, Shopee

• Login *Panel* ⤵️
https://panel.kaxel-host.tech
• Group ⤵️
https://lynk.id/dannmd

• *Peraturan*:
- Don't Share Link
- Don't Spam
- Don't 18+
- Don't Send Virus
- Don't Eljibiti

• Protection Site:
https://antiddos.dannnxd.repl.co`
conn.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: dann,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {})
}

handler.help = ['listpanel']
handler.tags = ['main']
handler.command = /^(listpanel)$/i

module.exports = handler