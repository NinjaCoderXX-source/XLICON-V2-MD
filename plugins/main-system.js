import { cpus as _cpus, totalmem, freemem } from 'os';
import util from 'util';
import { performance } from 'perf_hooks';
import { sizeFormatter } from 'human-readable';
import axios from 'axios';

let format = sizeFormatter({
  std: 'JEDEC',
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

let handler = async (m, { conn }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));

  const used = process.memoryUsage();
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
    return cpu;
  });

  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total;
    last.speed += cpu.speed / length;
    last.times.user += cpu.times.user;
    last.times.nice += cpu.times.nice;
    last.times.sys += cpu.times.sys;
    last.times.idle += cpu.times.idle;
    last.times.irq += cpu.times.irq;
    return last;
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  });

  let old = performance.now();
  let neww = performance.now();
  let speed = neww - old;

  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

  let user = global.db.data.users[who];

  try {
    let repo_Data = await axios.get('https://api.github.com/repos/salmanytofficial/XLICON-V2-MD');
    let { stargazers_count, forks, owner, created_at, html_url } = repo_Data.data;

    let infobt = `
🔰 *I'm ᗩKEᑎO-ᗰᗪ🧚‍♀️.* *A WhatsApp chuddy buddy bot with rich features* *Created By ★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★*. 🔰

 *❲❒❳ Stars:* ${stargazers_count} Stars ⭐
 *❲❒❳ Forks:* ${forks} Forks 🍴
 *❲❒❳ Author:* *★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★* 😎
 *❲❒❳ Create:* ${created_at} 
 *❲❒❳ IG CHAT:* https://instagram.com/mr.vi_x_0
  
🔰 *Created ʙʏ 🅷🅸🅶🅷 🆂🅲🅷🅾🅾🅻 🅳🆇🅳 🆃🅴🅰🅼* 🔰

*🕣 S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*≡  NodeJS memory*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`;

    conn.sendMessage(m.chat, { video: { url: "https://i.imgur.com/aRdGiNQ.mp4" }, caption: infobt, gifPlayback: true }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw 'Error fetching data from GitHub';
  }
};

handler.help = ['system'];
handler.tags = ['main'];
handler.command = ['system', 'status'];

export default handler;
                                                    
