//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'INGFO',
  'game': 'GAME',
  'econ': 'RPG',
  'rg': 'DAFATR',
  'sticker': 'STICKER',
  'dl': 'DOWNLOAD',
  'img': 'IMAGEN',
  'maker': 'MAKER',
  'prem': 'PREMIUM',
  'group': 'GRUP',
  'grup': 'GRUP ABSEN',
  'nable': 'ON/OFF FITUR', 
  'nime': 'ANIME',
  'rnime': 'ANIME REACCION',
  'islamic': 'ISLAMI',
  'tools': 'TOOLS',
  'ai': 'AI',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'nsfw': 'NSFW +18', 
  'ansfw': 'NSFW ANIME',
  'owner': 'OWNER', 
  'advanced': 'ADVANCED',
  'audio': 'EDIT AUDIO',
}
const defaultMenu = {
  before: `
◈ ━━━━━ *BOT ASISTEN RAZAN* ━━━━━ ◈

${ucapan()} %name

─────────────
▢ Halo Kak 👋. Saya adalah bot WhatsApp otomatis yang dapat membantu melakukan sesuatu, mencari dan mendapatkan data atau informasi melalui WhatsApp.

▢ Ketik .owner untuk menghubungi pemilik bot (bukan bot) untuk menyewa atau menanyakan sesuatu.
─────────────
 ╭─────『 *INFO USER* 』
❏ *𝙉𝙖𝙢𝙖:*  %name 
❏ *𝙉𝙤𝙢𝙤𝙧:* %tag
❏︎ *𝙇𝙞𝙢𝙞𝙩:* %diamond
❏ *𝙍𝙤𝙡𝙚:* %role
❏︎ *𝙇𝙚𝙫𝙚𝙡:* %level
❏︎ *𝙀𝙭𝙥:* %exp / %maxexp
❏︎ *𝙀𝙭𝙥 𝙏𝙤𝙩𝙖𝙡:* %totalexp
╰–––––––––––––––༓
 ╭─────『 *database* 』
❏ *tanggal:*  %date 
❏︎ *tanggal:* islam: %dateislamic
❏ *time:* %time
❏︎ *weton:* %weton
❏︎ *platform:* nodejs
❏︎ *total user:* %totalreg
❏︎ *total terdaftar:* %rtotalreg
╰–––––––––––––––༓

%readmore
Ⓟ = Premium
ⓓ = Diamond / limit
-----  -----  -----  -----  -----
  ≡ *DAFTAR MENU*
`.trimStart(),
  header: '╭─────『 *%category* 』',
  body: '❏︎ %cmd %isdiamond %isPremium',
  footer: '╰–––––––––––––––༓',
  after: end,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let tag = `@${m.sender.split('@')[0]}`
    let platform = os.platform()
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, tag,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = (fglog)
     
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null,)

m.react (rwait)
    
  } catch (e) {
    conn.reply(m.chat, '❎ Maaf, menunya error', m)
    throw e
  }
  let av = (musik)

conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}

