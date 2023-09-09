
import fg from 'api-dylux';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Wallpaper apa yang saya cari??`
  try {
    let res = await fg.wallpaper(text);
    let re = pickRandom(res);
    await conn.sendMessage(m.chat, { image: { url: re.image[0] }, caption: `✅ Hebat bukan?` }, { quoted: m });
  } catch (error) {
   m.reply(`✳️ Kesalahan: coba lagi nanti`)
  }
  
}
handler.help = ['wallpaper']
handler.tags = ['img']
handler.command = ['wallpaper', 'wallpapers', 'wp']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
