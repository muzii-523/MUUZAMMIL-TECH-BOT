Const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    // Note: 'settings' and 'global' variables are placeholders based on the input code structure.
    const ownerDisplay = settings.botOwner || 'MuzammilMD Official';
    const prefix = settings.prefix || '.';
    const version = settings.version || '2.2.6 alpha-8';
    
    // Placeholder values
    const uptimeDisplay = '3m 54s'; 
    const timezoneDisplay = 'Asia/Karachi'; 

    const helpMessage = `
┌─━━━━━━━━━━━━━━━━━━━━━〔 ✨ *M U Z A M M I L - M T H* ✨ 〕━━━━━━━━━━━━━━━━━━━━━─┐
│ ✦ 𝐎𝐖𝐍𝐄𝐑   : ${ownerDisplay}
│ ✦ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${version}
│ ✦ 𝐔𝐏𝐓𝐈𝐌𝐄  : ${uptimeDisplay}
│ ✦ 𝐏𝐑𝐄𝐅𝐈𝐗  : [ ${prefix} ]
└─━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━─┘

🌟 *Greetings:* Aapka **Elite Digital Assistant** hazir hai.
          Commands ki list neeche dekhiye.
━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─

📚 *𝐌𝐄𝐍𝐔 𝐈𝐍𝐃𝐄𝐗 (1-12):*
> Category dekhne ke liye number type karein ya reply karein.

╭━━━✦ *𝐄𝐋𝐈𝐓𝐄 𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐈𝐄𝐒* ✦━━━╮
│
│ ❶ 🌍  *GENERAL UTILS*
│ ❷ 🛡️  *GROUP MANAGEMENT*
│ ❸ 🔑  *OWNER EXCLUSIVE*
│ ❹ 🖼️  *IMAGE & STICKER LAB*
│ ❺ ✍️  *TEXT DESIGNERS*
│ ❻ 🎲  *FUN & GAMES*
│ ❼ 🧠  *AI POWER HUB*
│ ❽ 📥  *MEDIA DOWNLOADS*
│ ❾ 💻  *DEV & GITHUB*
│ ❿ 💖  *ANIME & LOVE VIBES*
│ ⓫ 🛠️  *MISC TOOLS*
│ ⓬ 🛑  *BUG REPORTS*
│
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

*Elite Tip:* Kisi bhi command ki zyada info ke liye **${prefix}help <command>** use karein.
*Thank You for Choosing MUZAMMIL-MTH!* 🚀
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            await sock.sendMessage(chatId, {
                image: fs.readFileSync(imagePath),
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363403831162407@newsletter',
                        newsletterName: '✨ MUZAMMIL-MTH ✨',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, {
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 10,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363403831162407@newsletter',
                        newsletterName: '✨ MUZAMMIL-MTH ✨',
                        serverMessageId: -1
                    }
                }
            });
        }

        const audioPath = path.join(__dirname, '../assets/audio.mp3');
        if (fs.existsSync(audioPath)) {
            await sock.sendMessage(chatId, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: message });
        }

    } catch (error) {
        console.error('Error in Elite MUZAMMIL-MTH help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
