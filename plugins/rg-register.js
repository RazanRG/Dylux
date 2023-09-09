
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Anda sudah terdaftar\n\nApakah Anda ingin mendaftar lagi?\n\n 📌 Gunakan perintah ini untuk membatalkan pendaftaran Anda \n*${usedPrefix}unreg* <Serial Number>`
  if (!Reg.test(text)) throw `⚠️ Formatnya salah\n\n ✳️ Menggunakan perintah: *${usedPrefix + command} nama.umur*\n📌Ejemplo : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Nama tidak boleh kosong'
  if (!age) throw '✳️ Usia tidak boleh kosong'
  if (name.length >= 30) throw '✳️ Namanya terlalu panjang' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wah kakek mau main bot'
  if (age < 5) throw '🚼  alah bocil main bot'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *TERDAFTAR* 」─
▢ *Nama:* ${name}
▢ *Umur* : ${age} tahun
▢ *Nomor seri* :
${sn}
└──────────────

 *${usedPrefix}menu* untuk melihat Menu
`.trim())
}
handler.help = ['daftar'].map(v => v + ' <nama.umur>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'daftar'] 

export default handler

