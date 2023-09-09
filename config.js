import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//******************* 》tambah owner《 *******************\\
// minimal 3, tunggu update gw 
global.owner = [
  ['62895602242948', 'Razan RG', true],
  ['6289671842736', '4KBOTZ', true], 
  ['6281316919334'] 
] //owner add 

global.mods = ['-'] 
global.prems = ['-', '-', '-']

global.lann = 'RAZANGANTENG' // https://api.betabotz.org
global.btc = 'InolEnIR' //https://api.botcahx.live


global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',  //biarin
  'https://zenzapis.xyz': '675e34de8a',  //biarin
  'https://api-fgmods.ddns.net': '4PDkC8Ji', //login di web https://api-fgmods.ddns.net/
  'https://api.betabotz.org': 'RAZANGANTENG', // login di webnya
  'https://api.botcahx.live': 'InolEnIR' 
}
//******************* 》database owner《 *******************\\
// card own
global.ownernumber = '62895602242948' // nomor owner 
global.razan = 'Razan RG' // nama owner
global.wm = '4K' // watermark 
global.nans = '4K' // watermark 2
global.email = 'razantanvan@gmail.com' // email owner
global.web = 'Catbotapi.my.id' // web
global.bio = 'developer bot' // bio owner
//******************* 》database bot《 *******************\\
// card bot
global.nomor = '6289671842736' // nomor bot
global.rg = '4KBOTZ' // nama bot
global.gmail = 'catbot.api@gmail.com' // email
global.website = 'Catbotapi.my.id' // web
global.biobot = 'ROBOT' // bio
//******************* 》sticker name《 *******************\\
// stiker pack
global.packname = '4KBOTZ\nNO BOT: +6289671842736' // nama setiker
global.author = 'BOT MULTI DEVICE\nCREATOR RAZAN' // nama setiker
//******************* 》media《 *******************\\
//info media owner
global.awal = 'KEREN' //cooming son, serah
global.fgig = 'follow  Instagram\nhttps://www.instagram.com/4krazan.mp4\n' // instagram owner
global.dygp = 'https://chat.whatsapp.com/GXVkcvluzR7DnxKGAYcQJp' //group wa bagian menu
global.fgsc = 'https://github.com/RazanRG' //github owner
global.fgyt = 'https://tiktok.com/razanbotz' //info owner
global.fgpyp = 'https://paypal.me/fg98f' //cooming son, skip aja
global.fglog = 'yanto.jpg' //foto bagian menu https://telegra.ph/file/c94763667e57406369a06.jpg
global.musik = 'nigga.m4a' // musik bagian menu
global.end = 'BOT ASISTEN RAZAN' // seteranh
//******************* 》wait/loading《 *******************\\
//loading setting
global.stikerwait = '*_STICKER SEDANG DI BUAT..._*' //stiker loading
global.wait = '█▒▒▒▒▒▒▒▒▒▒▒》10%' //cooming son
global.wait1 = '████▒▒▒▒▒▒▒▒》30%' //cooming son
global.wait2 = '███████▒▒▒▒▒》50%' //cooming son
global.wait3 = '██████████▒▒》80%' //cooming son
global.wait4 = '████████████》100%' //cooming son
global.wait5 = '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...' //cooming son
global.wait = '*⌛ _Loanding..._*\n*▰▰▰▱▱▱▱▱*' //loading
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
//******************* 》setting《 *******************\\
//biarin yg di bawah
global.multiplier = 69 //max simal player
global.maxwarn = '3' // max simal warn
//---------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
