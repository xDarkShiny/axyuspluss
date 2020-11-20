const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  
  if (!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.reply('Gerekli izniniz bulunmuyor')
  //if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`olog_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış Ayarlamak için a!önemli-mod-log');
  let modlog = message.guild.channels.get(db.fetch(`olog_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Lütfen kicklemek istediğiniz kullanıcıyı etiketleyin');
  if (reason.length < 1) return message.reply('Kickleme sebebinizi giriniz');
  if (user.id === message.author.id) return message.reply('Kendini kickleyeceğine kendin çıksana?');
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).kickable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
  
 db.add("case", 1)
let case1 = db.fetch("case")
message.channel.send(case1) 
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField(`<a:bluestar:772431181916536852> İşlem | Durum ${case1}`, 'KİCK')
  .addField(`<a:bluediamond:772431166162075679> Kicklenen üye/tag`, `${user.tag} (${user.id})`)
  .addField(`<a:dcworker:772431285460664330> Kickleyen yetkili`, `${message.author.username}#${message.author.discriminator}`)
  .addField(`<a:chromastar:772431261946871810> Kick sebebi`, "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .setDescription(`<a:tik3:762595449180782603> Kullanıcı **kicklendi** <a:tik3:762595449180782603>`)
  .setImage(`https://thumbs.gfycat.com/RapidThriftyGelding-max-1mb.gif`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2,
    kategori: "moderasyon",
 
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'at <@kullanıcı> <sebep>',
 
};