import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Masukkan Nama Pengguna Instagram\n\n📌Contoh: ${usedPrefix + command} fg98_ff` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Nama:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥pengikut:* ${res.followersH}
▢ *🫂Mengikuti:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`✳️ Periksa apakah nama penggunanya adalah *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 
handler.diamond = true

export default handler
