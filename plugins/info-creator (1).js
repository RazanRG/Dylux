function handler(m) {
  
  const contak = {
	"displayName": 'My bot',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${rg}\nitem1.TEL;waid=${nomor}:${nomor}\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:${website}\nEMAIL;Email Bot:${gmail}\nORG:${biobot}\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [contak] }}, { quoted: m })
  
}
handler.help = ['bot']
handler.tags = ['main']

handler.command = /^(bot)$/i

export default handler