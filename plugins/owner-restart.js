import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Jangan: node main.js\nLakukan: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('🔄 Memulai ulang Bot...\nTunggu sebentar')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler
