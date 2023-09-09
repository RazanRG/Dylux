
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Masukkan nomor yang ingin Anda kirimkan undangan ke grup\n\n📌 Contoh :\n*${usedPrefix + command}* 6259172945992`
if (text.includes('+')) throw  `✳️ Masukkan nomornya bersamaan tanpa *+*`
if (isNaN(text)) throw ' 📌 Masukkan angka saja ditambah kode negara Anda tanpa spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\nSeorang pengguna mengundang Anda untuk bergabung dengan grup ini \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Tautan undangan telah dikirim ke pengguna`) 

}
handler.help = ['invite <62xxxxxxx>']
handler.tags = ['group']
handler.command = ['invite','invit'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
