//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Pilih batu/kertas/gunting\n\nContoh : *${usedPrefix + command}* kertas\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *seri*\n\n‣ Anda : ${text}\n‣ ${rg} : ${astro}\n\n🎁 Poin (±)100 XP`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Won* 🎊\n\n‣ Anda : ${text}\n‣ ${rg} : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu kalah*\n\n‣ Anda : ${text}\n‣ ${rg} : ${astro}\n\n Poin *-${poin} XP*`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Won* 🎊\n\n‣ Anda: ${text}\n‣ ${rg}: ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Anda kalah*\n\n‣ Anda: ${text}\n‣ ${rg}: ${astro}\n\nPoin *-${poin} XP*`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Won* 🎊\n\n‣ Anda: ${text}\n‣ ${rg}: ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Anda kalah*\n\n‣ Anda: ${text}\n‣ ${rg}: ${astro}\n\nPoin *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['suit <Batu gunting kertas>']
handler.tags = ['game']
handler.command = ['suit'] 
handler.register = false

export default handler
