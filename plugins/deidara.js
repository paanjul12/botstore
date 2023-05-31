let fetch = require("node-fetch")
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/deidara.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButtonImg(m.chat, a, "Random Image", "2023 © Dann-MD", 'Next', ".deidara", m)
}
handler.help = ['deidara']
handler.tags = ['maker']
handler.command = /^deidara$/i

module.exports = handler