import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `✳️ *Contoh :*\n\n *${usedPrefix + command}* aku jelek?`
  m.react('🫣') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.botcahx.live/api/search/simsimi?query=${encodeURIComponent(text)}&apikey=${btc}`)
  let json = await res.json() 
m.reply(json.result.success)
}
handler.help = ['simi']
handler.tags = ['fun']
handler.command = ['simi', 'bertanya'] 

export default handler
