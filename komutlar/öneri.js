const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    var ac = client.emojis.get(client.emojiler.açıkA);
  var ka = client.emojis.get(client.emojiler.kapalıA);
    if (type.length < 1) return message.channel.send("Lütfen önerinizi yazın. Örnek kullanım: ``a!öneri AxyUS Yardım Komutu Değiştirilmeli.``");
message.reply('Öneri gönderilsin mi? Gönderilmesini istiyorsan `evet` yazman yeterlidir.')
.then(() => {
message.channel.awaitMessages(response =>response.content ==='evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
message.reply('Tavsiyeniz İçin Teşekkürler :heart_eyes: | Tavsiyeniz Kurucuya ve Sunucuya İletildi!')
const embed2 = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`<a:brave:772431209443229726> Kullanıcı ID`,message.author.id,true)
.addField(`<a:brave:772431209443229726> Kullanıcı Adı`,message.author.username,true)
.addField(`<a:brave:772431209443229726> Kullanıcı Tagı`,message.author.discriminator,true)
.addField(`<a:brave:772431209443229726> Sunucu`,message.guild.name,true)
.addField("Öneri", type)
.setTimestamp()
.setFooter('Öneriyi gönderdiği saat ')
.setThumbnail(message.author.avatarURL)
client.users.get('543436148056260608').send(embed2);
client.channels.get('775689326516240424').send(embed2).then(m => m.react(ac,
m.react(ka)))
 
 
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};