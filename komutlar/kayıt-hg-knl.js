const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<:ryzen_carpi:777235267933175848> | Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

let teyithgkanal = message.mentions.channels.first();

if (!teyithgkanal) {
    return message.channel.send(`<:ryzen_carpi:777235267933175848> | Bir Kanal Etiketlemelisin!`)
}
//
db.set(`teyithgkanal_${message.guild.id}`, teyithgkanal.name)

const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> | Kayıt Hoşgeldin Kanalı Başarıyla ${teyithgkanal} Olarak Ayarlandı`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hg-kanal'],
    kategori: "kayıt",
    permLevel: 0
}

exports.help = {
    name: 'kayıt-hg-kanal',
    description: '',
    usage: 'teyit-kanal <@teyithgkanal>'
}