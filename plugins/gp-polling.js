
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Teks untuk survei tidak ada \n\n📌 Contoh: \n*${usedPrefix + command}* Pesan |as|xd`
if (!text.includes('|')) throw `✳️ Pisahkan polling dengan *|* \n\n📌 Contoh: \n*${usedPrefix + command}* `

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survei diminta oleh:* ${name}\n\n*Mensaje:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <halo|sebagai|wkwk>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
