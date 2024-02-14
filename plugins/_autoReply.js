export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ( m.text.startsWith('wa.me') && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`Hello @${m.sender.split('@')[0]}\nඔයා සේව් .මාව සේව් නම් කියන්න /;\n\nමාගේ විස්තර දැනගැනීමට අවශ්‍යනම් .intro ලෙස මැසේජ් එකක් එවන්න\n*Type* \`\`\`.intro\`\`\` *AUTO REPLY BY ★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★*`.trim()}, {quoted:m});
   /*this.sendButton(m.chat, `*Invite bot to a group*      
    Hallo @${m.sender.split('@')[0]} 
    you can rent the bot to join a group or contact owner 
    more info click on the button
  `.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })*/
   m.react('💎')
} 

 return !0
}