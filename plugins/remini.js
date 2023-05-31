// Dann Official


let jimp = require("jimp")
let uploadImage = require("../lib/uploadImage.js")
let uploadFile = require("../lib/uploadFile.js")

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw 'size width?'
	if (!toheight) throw 'size height?'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "where the media?"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Mime ${mime} tidak didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `- *Compress Remini* -

*• BEFORE*
> Width : ${size.before.width}
> Height : ${size.before.height}

*• AFTER*
> Width : ${size.after.width}
> Hegiht : ${size.after.height}

*• LINK*
> Original : ${link}
> Compress : ${linkcompres}`, m)
}
handler.help = ['remini <width> <height> <reply|caption>']
handler.tags = ['tools']
handler.command = /^(remini)$/i

module.exports = handler