const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let üyerol = message.mentions.roles.first();

 if (!üyerol) {
    return message.channel.send(`Lütfen Bir Rol Etiketle!`)
    }

db.set(`üyerol_${message.guild.id}`, üyerol.name)
//
const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> Kayıt Sistemi İçin Başarıyla Verilecek Rol Ayarlandı. \nAyarlanan Rol: <@${üyerol}>`)
.setFooter('message.user.avatarURL')
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['üye-rol-ayarla'],
    kategori: "kayıt",
    permLevel: 0
}
//
exports.help = {
    name: 'kayıt-üye-rol',
    description: 'Kayıt Sistemi.',
    usage: 'teyit-üye-rolayarla <@rol>'
}