const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
//EMİRHAN SARAÇ

  const user = message.mentions.users.first() || message.author;
  if (!user)
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`<:ryzen_carpi:777235267933175848> Hata`)
        .setDescription(`<:ryzen_carpi:777235267933175848> Lütfen birisini etiketle!`)
    );

  let erkek = db.get(`erkekpuan_${message.guild.id}_${user.id}`);
  let kız = db.get(`kadınpuan_${message.guild.id}_${user.id}`);

  message.channel.send(`<a:ryzen_yesilwumpus:777235331224830023> ${user} Adlı Kullanıcı Bu Sunucuda: \n\n<:kullanc:778645740935315466> **Toplam \`  ${kız || "0"}  \` Kadın Kaydetmiş!** \n<:kullanc:778645740935315466> **Toplam \`  ${erkek || "0"}  \`  Erkek Kaydetmiş!** `);
};//EMİRHAN SARAÇ

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  kategori: "kayıt",
  aliases: ['kullanıcıistatistik','kullanıcı-istatistik','administatistik']
};

exports.help = {
  name: "admin-istatistik",
description: "Yetkililer hakkında bilgi verir.",
type: "Yapılandırma"
};
//EMİRHAN SARAÇ
