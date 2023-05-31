let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama hero', m)

  await m.reply('Searching...')
    let dann = await fetch(`http://api.lannn.me/api/search/heroml?hero=${text}&apikey=P5hoOJWE`)
    let res = await dann.json()
    let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=dannlaina&query=hero%20${text}`
    let hasil = `*── 「 HERO ML 」 ──*

▢ *Name*: ${res.result.hero_name}
▢ *Role*: ${res.result.role}
▢ *Lane*: ${res.result.laning_recommendation}
▢ *Relate Date*: ${res.result.release_date}
▢ *Quotes*: ${res.result.entrance_quotes}
▢ *Features*: ${res.result.hero_feature}
▢ *Info*: 
${res.result.character.chara[0]}
${res.result.character.chara[1]}
▢ *Atribut*: ${res.result.attributes.movement_speed}
${res.result.attributes.physical_attack}
${res.result.attributes.magic_power}
${res.result.attributes.attack_speed}
${res.result.attributes.physical_defense}
${res.result.attributes.magic_defense}
${res.result.attributes.basic_atk_crit_rate}
${res.result.attributes.hp}
${res.result.attributes.mana}
${res.result.attributes.ability_crit_rate}
${res.result.attributes.hp_regen}
${res.result.attributes.hp}
${res.result.attributes.mana_regen}
▢ *Price*: 
*BP*: ${res.result.price.battle_point}
*DIAMOND*: ${res.result.price.diamond}
▢ *Skill*: 
*Durability*: ${res.result.skill.durability}
*Offense*: ${res.result.skill.offense}
*Skill Effect*: ${res.result.skill.skill_effects}
*Difficulty*: ${res.result.skill.difficulty}
▢ *Spesiality*: ${res.result.speciality}
▢ *Background Story*: 
${res.result.background_story}
`

    conn.sendFile(m.chat, thumb, 'heroml.jpg', `${hasil}`, m)
}
handler.help = ['heroml'].map(v => v + ' <nama hero>')
handler.tags = ['internet']
handler.command = /^(heroml)$/i

module.exports = handler