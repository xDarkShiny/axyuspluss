const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let kızrol = message.mentions.roles.first();

 if (!kızrol) {
    return message.channel.send(`<:ryzen_carpi:777235267933175848> Lütfen Bir Rol Etiketle!`)
    }
//
db.set(`kızrol_${message.guild.id}`, kızrol.name)

const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> Kayıt Sistemi İçin Başarıyla Kız Rol Ayarlandı. \nAyarlanan Rol: <@${kızrol}>`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kız-rol-ayarla'],
    kategori: "kayıt",
    permLevel: 0
}

exports.help = {
    name: 'kayıt-kız-rol',
    description: 'teyit Sistemi.',
    usage: 'teyit-kız-rolayarla <@rol>'
}
//