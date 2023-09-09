//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Pesan selamat datang telah dikonfigurasi')
  } else throw `✳️ Masukkan pesan Selamat Datang\n\n@user (sebutkan)\n@grup (Nama grup)\n@desc (deskripsi grup)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
