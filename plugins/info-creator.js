function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${razan}\nitem1.TEL;waid=${ownernumber}:${ownernumber}\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:${web}\nEMAIL;Email Owner:${email}\nORG:${bio}\nEND:VCARD`
}
conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['main']

handler.command = /^(creator|owner|owner2)$/i

export default handler