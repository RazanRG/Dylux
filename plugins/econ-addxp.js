//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ tag orangnya'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Masukkan jumlah *xp* yang ingin Anda tambahkan'
  if (isNaN(txt)) throw ' 🔢 hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ MINIMAL MAX  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *XP DITAMBAHKAN*
┌──────────────
▢  *Total:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Apakah kamu menerima \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

