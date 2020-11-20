const Discord = require('discord.js')
const fs = require('fs');
//var ayarlar = require('../ayarlar.json');
//let rol = JSON.parse(fs.readFileSync("././jsonlar/otoR.json", "utf8"));

exports.run = async (client, message, args) => {
   
  const db = require('quick.db');
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  let channel = message.mentions.channels.first() || message.guild.channels.find(c=>c.name===args.slice(0).join(' '))
  
   if(args[0] === 'kapat') {
   if (db.has(`otoRK_${message.guild.id}`) === true) {
     message.channel.send(`▪ ${client.emojis.get('762595553473200128')}**Tebrikler!** Otorol kayıt kanalı başarıyla kaldırıldı ッ`)
     db.delete(`otoRK_${message.guild.id}`)
     return
}
  message.channel.send(`**Hmm galiba zaten otorol ayarlanmamış.**`)
    return
   }
  
  if (db.has(`otoR_${message.guild.id}`) === false) return message.channel.send(`Hey Kanka önce otorol ayarlamalısın .`)
  
    if (!channel) {
        return message.reply("Otomatik rol kayıtları kanalı olarak ayarlamak istediğiniz kanalı etiketleyiniz!")
    }
  
     db.set(`otoRK_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`İşte buu! otorol kanalı ${channel} olarak ayarlandı!\ nOtorol kayıt kanalını kapatmak isterseniz **${prefix}oto-rol-kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oto-rol-kanal-ayarla', 'oto-rol-kanal-belirle', 'otorolkanal', 'otorol-kanal'],
    permLevel: 4,
    kategori: "ayarlar"
}

exports.help = {
    name: 'oto-rol-kanal',
    description: 'Otomatik rol kayıtlarının gönderileceği kanalı ayarlar.',
    usage: 'oto-rol-kanal [#kanal/kanal adı]'
}