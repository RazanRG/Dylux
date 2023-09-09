
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Masukkan teksnya`
m.react('💬')

	try {
        let gpt = await fetch(global.API('fgmods', '/api/info/openai2', { text }, 'apikey'));
        let res = await gpt.json()
        await m.reply(res.result)
	} catch {
		m.reply(`❎ Kesalahan: coba lagi nanti`)
	}

}
handler.help = ['ai <text>']
handler.tags = ['ai']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']

export default handler
