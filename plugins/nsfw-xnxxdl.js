
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 grup tidak mendukung konten nsfw \nUntuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Anda masih di bawah umur! Kembalilah ketika Anda berusia di atas 18 tahun`
  if (!text) throw `✳️ Untuk mencari\n📌Gunakan : *${usedPrefix + command} <search>*\n\nUntuk mendownload dari URL:\n📌Gunakan : *${usedPrefix + command} <url>*`
    
    m.react(rwait)
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Masukkan tautan *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
≡  *XNXX DL*
            
▢ *📌judul*: ${xn.result.title}
▢ *⌚durasi:* ${xn.result.duration}
▢ *🎞️kualitas:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Kesalahan: coba lagi nanti`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Kualifikasi* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`🔴 Kesalahan: coba lagi nanti`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw', 'prem']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 5
handler.premium = false
handler.register = true

export default handler
