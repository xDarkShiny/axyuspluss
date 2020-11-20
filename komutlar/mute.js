const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (receivedMessage,  msg, args) => {
let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
        if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("Bu komudu kullanabilmek için `Ban` yetkisine sahip olmanız gerek.");
 if (user.hasPermission("BAN_MEMBERS")) return msg.channel.send(`Hata! \`${user.tag}\` isimli kullanıcı bu sunucuda yetkili.`)
let olog = await db.fetch(`olog_${msg.guild.id}`)
  if (!olog) return msg.channel.send("Ayarlı Bir Mute Log Kanalı Yok! Ayarlamak için \`a!önemli-mod-log #kanal\` !") 
var mod = msg.author
var reason = args[1]
 let sebep = args.slice(2).join(' ')
 
  if (!user) return msg.reply('Hey, Kullanıcı Etiketlemedin')
 if (!reason) return msg.reply('Hmm Sorun Şu Ki Bir Süre Belirtmedin! Seçeneklerin : 1s-1m-1h-1d-1w')
if (!sebep) return msg.reply('Biib Boob Sebep Belirtmedin! Biib Boob')
 
 
 
  let mute = msg.guild.roles.find(r => r.name === "AxyUS + | Mute Sistemi");
        
  let mutetime = args[1]
if(!mute){
      mute = await msg.guild.createRole({
        name: "AxyUS + | Mute Sistemi",
        color: "#818386",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
 
    }
 
 
  await(user.addRole(mute.id));
msg.channel.send(``)
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
  msg.channel.send(`<a:chromastar:772431261946871810> ${user} **Adlı Kişi** , \`${mutezaman}\` **Susturuldu! Sunucudan Çıkarsa Bile Mutesi Devam edecek!** <a:chromastar:772431261946871810>`)
db.set(`muteli_${msg.guild.id + user.id}`, 'AxyUS + | Mute Sistemi')
db.set(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime)
                        
  const muteembed = new Discord.RichEmbed()
        .setTitle('Ceza: Mute')
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
      .addField(`<a:ngr:749324809770500106> Moderatör`, `${mod}`,true)
      .addField(`<a:bluestar:772431181916536852> Sebep`, `\`${sebep}\``,true)
      .addField(`<a:yukleniyorr:772431328817446923> Kullanıcı`, `<@${user.id}>`,true)
      .addField(`<a:dcworker:772431285460664330> Süre`,`\`${mutezaman}\``)
  . setColor("RANDOM")
msg.guild.channels.get(olog).sendEmbed(muteembed)
 
  setTimeout(function(){
db.delete(`muteli_${msg.guild.id + user.id}`)
    user.removeRole(mute.id)
 msg.channel.send(`<a:onayl:769860723320684575> <@${user.id}> **Muten açıldı.**`)
  }, ms(mutetime));
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur"],
  kategori: "moderasyon",
  permLevel: 0
};
 
exports.help = {
  name: "mute",
  description: "",
  usage: ""
};