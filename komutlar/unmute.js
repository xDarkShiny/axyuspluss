const Discord = require("discord.js")
const ms = require("ms")  

module.exports.run = async (bot, message, args) => {
  

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Yapmak İçin Kick Members Yetkisine Sahip Olmalısın.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setAuthor("Hata").setDescription(`Kullanıcı Bulunamadı`))
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "AxyUS + | Mute Sistemi")) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kişi Mutelenmemiş'))
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setAuthor("Hata").setDescription(`<a:no:769861387572609026> Unmute Sebebini Yazmalısın`))
    let muterole = message.guild.roles.find(`name`, "AxyUS + | Mute Sistemi");

    if (!muterole) {
        try {
           muterole = await message.guild.createRole({
                name: "AxyUS + | Mute Sistemi",
                color: "#818386",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  
  
  const db = require('quick.db');
 
  let user1 = message.mentions.users.first();
  let reason1 = args.slice(1).join(' ');
  if (db.has(`olog_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış Ayarlamak için a!önemli-mod-log');
  let modlog = message.guild.channels.get(db.fetch(`olog_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Uyaracağın kişiyi etiketlemelisin!');
  if (reason.length < 1) return message.reply('Uyarma sebebini yazmadın!');
  if (user.id === message.author.id) return message.reply('Kendini uyaramazsın!');
  
  //if (!message.guild.member(user).roles.has(muteRole)) return message.reply('Bu kişi zaten susturulmuş!');
  
db.add("case", 1)
let case1 = db.fetch("case")

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField(`Yapılan İşlem | Durum ${case1}`, 'Unmute')
  .addField(`Uyarılan Kullanıcı`, `${user1.tag} (${user.id})`)
  .addField(`Uyaran Yetkili`, `${message.author.username}#${message.author.discriminator}`)
  .addField(`Uyarı Sebebi`, "```" + reason1 + "```")
  modlog.send(embed);
  
  message.guild.members.get(user.id).send(`<@${user.id}>, \n**${message.guild.name}** adlı sunucuda **${reason}** sebebi ile uyarıldın! \nKuralları çiğnemeye devam eder isen susturulabilir, atılabilir veya yasaklanabilirsin!`)
  

     await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(`Eylem: Unmute`)
            .addField(`<a:bluediamond:772431166162075679> **Kullanıcı**`, `<@${user.id}>`)
            .addField(`<a:dcworker:772431285460664330> **Sebep**`, `\`${reason}\``)
            .addField(`<a:chromastar:772431261946871810> **Moderatör**`, `${mod}`)
            .setColor('RANDOM')
        message.channel.send(muteembed)
}


exports.conf = {
    aliases: ["mute-kaldır"],
    kategori: "moderasyon",
    permLevel: 2
};

exports.help = {
    name: "unmute",
    description: "Etiketlenen Kişinin Mutesini Geri Alır",
    usage:  "unmute [kullanıcı] [sebep]",
}