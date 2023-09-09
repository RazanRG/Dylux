
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ tag atau sebutkan seseorang\n\n📌 Contoh: ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Pengguna tidak ditemukan di database saya`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Pengguna yang Diperingatkan* ⚠️

▢ *Admin:* ${name}
▢ *Pengguna:* @${who.split`@`[0]}
▢ *peringatan:* ${warn + 1}/${war}
▢ *alasan:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *PERINGATAN* ⚠️
Anda menerima peringatan dari admin

▢ *peringatan:* ${warn + 1}/${war} 
Jika Anda menerima *${war}* peringatan, Anda akan otomatis dikeluarkan dari grup`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Oleh karena itu, pengguna yang melampaui *${war}* peringatan akan dikick`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Anda dikeluarkan dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* kaliAnda dikeluarkan dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* kali`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
