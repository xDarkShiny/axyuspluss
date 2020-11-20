const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    
  const db = require('quick.db');
  

 
  
   const x = args.slice(0).join(' ');
  
    if (!x) return message.reply('Lütfen bir oylama içeriği giriniz');
    
    const dogrulandi = client.emojis.find(emoji => emoji.name === "onayl"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM ÖRN: evet)
    const dogrulandi2 = client.emojis.find(emoji => emoji.name === "no"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM ÖRN: evet)


    const embed = new Discord.RichEmbed()
    
        .setColor("GREEN")
        .setAuthor(`> ${client.user.username} - Oylama sistemi`)
        .addField('Oylama', x)
        .setFooter(`Tike Veya Çarpıya Basarak Oylaya Bilirsiniz.`)
    let msg = await message.channel.send(embed)
        .then(function (msg) {
          msg.react(dogrulandi)
          msg.react(dogrulandi2) 
               
        });
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["anket", "oylama-yap", "anket-aç"],
  permLevel: 4,
  kategori: "sunucu",

};

exports.help = {
  name: 'oylama',
  description: 'Sunucunuzda oylama yapmanızı sağlar.',
  usage: 'oylama <mesaj>',
 
};