//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *AFK* 
Sekarang kamu afk sampai kamu mengirim pesan 
▢ *Nama:* ${conn.getName(m.sender)} 
▢ *Alasan:* ${text ? text : ''}
  `)
}
handler.help = ['afk <alasan>']
handler.tags = ['econ']
handler.command = ['afk']
handler.group = true

export default handler
