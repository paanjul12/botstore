let handler = m => m 
  
    handler.all = async function (m) { 
    let setting = db.data.settings[this.user.jid]
      if (new Date() * 1 - setting.status > 1000) {  
          let _uptime = process.uptime() * 1000  
          let uptime = clockString(_uptime)
        await this.setBio(`${global.wm2}'s | Runtime: ${uptime} |  Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Only Group' : 'Publik'} | Version: ${global.version}`).catch(_ => _) 
          setting.status = new Date() * 1  
      }
    }

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}