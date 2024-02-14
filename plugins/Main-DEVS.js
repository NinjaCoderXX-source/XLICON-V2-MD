var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "𝐇𝐞𝐲" }, "message":{ "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = Img.getRandom()	
const cat = `*_ᗩKEᑎO-ᗰᗪ🧚‍♀️_*


*_—🔰 ᗩKEᑎO-ᗰᗪ🧚‍♀️  𝐃𝐄𝐕 1 wa.me/+94714201875_*

*_—🔰 ᗩKEᑎO-ᗰᗪ🧚‍♀️  𝐃𝐄𝐕 2 wa.me/+94752799279_*
*---------------------*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['devr', 'maindev']
handler.tags = ['info']
handler.command = /^(maindev|devi)$/i

export default handler
