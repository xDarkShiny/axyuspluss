const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:590136777155543040>Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let ologk = message.mentions.channels.first();
let ologkanal = await db.fetch(`olog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!ologkanal) return message.channel.send(`Modlog Kanalı Zaten ayarlı değil.`);
    db.delete(`olog_${message.guild.id}`)
   message.channel.send(`ModLog Kanalı başarıyla sıfırlandı.`);
  
    return
  }
  
if (!ologk) return message.channel.send(`Bir modlog kanalı belirtmelisin.`);

db.set(`olog_${message.guild.id}`, ologk.id)

message.channel.send(`Mod-Log kanalı başarıyla ${ologk} olarak ayarlandı. Peki Bu Ne İşe Yarıcak : Yapılan Banı Muteyi Bu kanalda Gösterir `);
 message.react('607634966959882250')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['o-mod-log'],
    permLevel: 2 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'önemli-mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
   