const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let yetkili = message.mentions.roles.first();

 if (!yetkili) {
    return message.channel.send(`Lütfen Bir Rol Etiketle!`)
    }

db.set(`yetkilirol_${message.guild.id}`, yetkili.name)
//
const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> Kayıt Sistemi İçin Başarıyla Erkek Rol Ayarlandı. \nAyarlanan Rol: <@${yetkili}>`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yetkili-rol-ayarla'],
    kategori: "kayıt",
    permLevel: 0
}

exports.help = {
    name: 'kayıt-yetkili-rol',
    description: 'Kayıt Sistemi.',
    usage: 'teyit-yetkili-rolayarla <@rol>'
}
//