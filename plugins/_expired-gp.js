
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🔴 selamat tinggal brother  *${this.user.name}* saya akan keluar dari group\n\nmasa sewa berakhir`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
