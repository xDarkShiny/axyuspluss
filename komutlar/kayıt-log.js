const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:x: | Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

let teyitlog = message.mentions.channels.first();

if (!teyitlog) {
    return message.channel.send(`:x: | Bir Kanal Etiketlemelisin!`)
}
//
db.set(`teyitlog_${message.guild.id}`, teyitlog.name)

const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> | Kayıt Olma Log Kanalı Başarıyla ${teyitlog} Olarak Ayarlandı`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt-log-kanal'],
    kategori: "kayıt",
    permLevel: 0
}

exports.help = {
    name: 'kayıt-log-ayarla',
    description: '',
    usage: 'teyit-kanal-log <@kayitolmakanal>'
}