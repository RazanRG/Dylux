import fetch from "node-fetch"
import util from "util"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Masukkan tautan Instagram\n\n📌Contoh : ${usedPrefix + command} https://www.instagram.com/reel/Cvxkrtsg7-G/?igshid=MzRlODBiNWFlZA==`
    m.react(wait)
     const url = args[0];
     let re = await fetch(API('lann', '/api/download/igdowloader', { url: url, apikey: lann }))
     let message = await re.json()  
    try {             
        for (let i of message.message ) {
            conn.sendFile(m.chat, i._url, null, `*Done*`, m)
        }
    } catch(err) {
        m.react(done)
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(Instagram|ig|igdly)$/i
handler.limit = true

export default handler
