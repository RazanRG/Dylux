
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️Pengguna tidak ditemukan di database saya`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌Nama* : _@${who.split('@')[0]}_
▢ *💎Diamond* : _${user.diamond}_
▢ *⬆️XP* : _Total ${user.exp}_
└──────────────

*NOTA :* 
Anda dapat membeli 💎 *diamond* menggunakan perintah
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance', 'limit']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
