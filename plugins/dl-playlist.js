import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `✳️ Masukkan judul lagu\n\n*📌 Contoh*\n*${usedPrefix + command}* cupid`
    m.react('📀')
    let result = await yts(text)
    let ytres = result.videos
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *durasi:* ${v.timestamp}\n▢ 👀 *viewer:* ${v.views}\n▢ 📌 *judul* : ${v.title}\n▢ 📆 *diterbitkan:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *durasi:* ${v.timestamp}\n▢ 👀 *viewer:* ${v.views}\n▢ 📌 *judul* : ${v.title}\n▢ 📆 *Diterbitkan:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *MUSIC*🔎', `\n 📀 Berikut adalah daftar hasil dari :\n *${text}*`, fgig, `Klik Disini `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.diamond = true
handler.disabled = true

export default handler
