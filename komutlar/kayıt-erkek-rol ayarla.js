const Discord = require('discord.js')
const db = require('quick.db')
//
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let erkekrol = message.mentions.roles.first();

 if (!erkekrol) {
    return message.channel.send(`<:ryzen_carpi:777235267933175848> Lütfen Bir Rol Etiketle!`)
    }

db.set(`erkekrol_${message.guild.id}`, erkekrol.name)
  
  
  

const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> Kayıt Sistemi İçin Başarıyla Erkek Rol Ayarlandı. \nAyarlanan Rol: ${erkekrol}`)
message.channel.send(embed)
};//
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['erkek-rol-ayarla'],
    kategori: "kayıt",
    permLevel: 0
}

exports.help = {
    name: 'kayıt-erkek-rol',
    description: 'Kayıt Sistemi.',
    usage: 'teyit-erkek-rolayarla <@rol>'
}