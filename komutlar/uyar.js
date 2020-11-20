const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (db.has(`olog_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış Ayarlamak için a!önemli-mod-log');
  let modlog = message.guild.channels.get(db.fetch(`olog_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Uyaracağın kişiyi etiketlemelisin!');
  if (reason.length < 1) return message.reply('Uyarma sebebini yazmadın!');
  if (user.id === message.author.id) return message.reply('Kendini uyaramazsın!');
  
  //if (!message.guild.member(user).roles.has(muteRole)) return message.reply('Bu kişi zaten susturulmuş!');
  
db.add("case", 1)
let case1 = db.fetch("case")

  const embed = new Discord.RichEmbed()
  .setColor("#2f3136")
  .addField(`<a:ralexEmoji:776466039985930250> Yapılan İşlem | Durum ${case1}`, 'Uyarma')
  .addField(`<a:ayarlar:772431128145559575> Uyarılan Kullanıcı`, `${user.tag} (${user.id})`)
  .addField(`<a:ayarlar:772431128145559575> Uyaran Yetkili`, `${message.author.username}#${message.author.discriminator}`)
  .addField(`<a:chromastar:772431261946871810> Uyarı Sebebi`, "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.members.get(user.id).send(`<a:bluestar:772431181916536852> <@${user.id}>, \n**${message.guild.name}** adlı sunucuda **${reason}** sebebi ile uyarıldın! \nKuralları çiğnemeye devam eder isen susturulabilir, atılabilir veya yasaklanabilirsin!`)
    
  const embed2 = new Discord.RichEmbed()
  .setColor("#2f3136")
  .setDescription(`<a:ralexEmoji:776466039985930250> <@${user.id}> adlı kullanıcı **${reason}** sebebi ile başarıyla uyarıldı!. Daha Dikkatli Olmalısın. <a:alarm3:762595496611020830>`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warn", "uyarı-ver"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyar',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};