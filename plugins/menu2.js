/*
     * Dann Official
     * Instagram: @dannalwaysalone
*/

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let { platform } = require('node:process')
let os = require('os')

let tags = {
  'rpgabsen': '*「 Rpg-Absen 」*',
  'rpg': '*「 Rpg 」*',
  'game': '*「 Game 」*',
  'xp': '*「 Exp & Limit 」*',
  'asupan': '*「 Asupan 」*',
  'sticker': '*「 Stiker 」*',
  'main': '*「 Main 」*',
  'kerang': '*「 Kerang Ajaib 」*',
  'quotes': '*「 Quotes 」*',
  'admin': '*「 Admin 」*',
  'group': '*「 Group 」*',
  'internet': '*「 Internet 」*',
  'anonymous': '*「 Anonymous 」*',
  'downloader': '*「 Downloader 」*',
  'berita': '*「 Berita 」*',
  'tools': '*「 Tools 」*',
  'fun': '*「 Fun 」*',
  'database': '*「 Database 」*', 
  'vote': '*「 Voting 」*',
  'absen': '*「 Absen 」*',
  'catatan': '*「 Catatan 」*',
  'jadian': '*「 Jadian 」*',
  'islami': '*「 Islami 」*',
  'owner': '*「 Owner 」*',
  'advanced': '*「 Advance 」*',
  'info': '*「 Info 」*',
  'audio': '*「 Audio 」*',
  'maker': '*「 Maker 」*',
}
const defaultMenu = {
  before: `
Hai, %ucapan %name! 👋

*Waktu*:
%wib WIB
%wita WITA
%wit WIT
*Hari*: %week
*Tanggal*: %date
*Tanggal Islam*: %dateIslamic
*Tahun Baru*: -%dateCountdown

» Follow Ig : instagram.com/ipaan_ae

» Donasi agar bot lancar
Dana : 083861639366
Ovo : 083861639366
Pulsa : 083861639366 - 085640732781

» Join Group
Group 1
https://chat.whatsapp.com/JTkDLDrdmcaDY0lSEwvbdU

Group 2
https://chat.whatsapp.com/J1LsdVo3Scm52QT5SpwufS

*Limit*: %limit
*Level*: %level
*XP*: %totalexp
%readmore`.trimStart(),
  header: '%category',
  body: '• %cmd %islimit %isPremium',
  footer: '',
  after: `IpanBotz masih dalam tahap pengembangan.
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const dd = new Date('2023-01-01');
    const locales = 'en';
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

// Platform Informasi
const platform = os.platform();
const arch = os.arch();
const release = os.release();
const totalMem = os.totalmem() / (1024 * 1024 * 1024);
const freeMem = os.freemem() / (1024 * 1024 * 1024);

// Platform
const platformInfo = `${platform}`;

// Informasi
const infomem = `Architecture ${arch}, ${release}`;

// Total Memori
const totalmem = `${totalMem.toFixed(2)} GB`;

// Free memori
const freemem = `${freeMem.toFixed(2)} GB`;

// Define the target date
   const targetDate = new Date('January 1, 2024 00:00:00');
// Define the current date
   const currentDate = new Date();
// Calculate the remaining time in milliseconds
   const remainingTime = targetDate.getTime() - currentDate.getTime();
// Convert milliseconds to days, hours, minutes, and seconds
   const seconds = Math.floor(remainingTime / 1000) % 60;
   const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
   const hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
   const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
// Tampilkan Tahun Baru
    let dateCountdown = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik lagi menuju tahun baru!`;
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, dateCountdown, wib, wit, wita, time, totalmem, totalreg, rtotalreg, platformInfo, freemem, infomem, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await m.reply('Tunggu Sebentar...')
// Fake Contact
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
    let thumb = 'https://telegra.ph/file/0f51c718c3805d7c476ff.jpg'
    let menu = [
    '🗿'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
    //conn.sendButton(m.chat, text.trim(),"2023 © Dann-MD", await (await fetch(thumb)).buffer(), [['Owner', '.owner'],['Donasi', '.donasi'],['Speed', '.speed']], true, { quoted: m })
    conn.sendFile(m.chat, thumb, 'menu.jpg', `${text}`, m)
    conn.sendFile(m.chat, './mp3/dann.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(allmenu|help2|\?)$/i

handler.register = false
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}