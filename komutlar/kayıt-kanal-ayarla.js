const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<:ryzen_carpi:777235267933175848> | Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

let teyitkanal = message.mentions.channels.first();

if (!teyitkanal) {
    return message.channel.send(`<:ryzen_carpi:777235267933175848> | Bir Kanal Etiketlemelisin!`)
}
//
db.set(`teyitkanal_${message.guild.id}`, teyitkanal.name)

const embed = new Discord.RichEmbed()
.setDescription(`<:ryzen_tik:777235126769287189> | Kayıt Olma Kanalı Başarıyla ${teyitkanal} Olarak Ayarlandı`)
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt-kanal'],
    kategori: "kayıt",
    permLevel: 0
}

exports.help = {
    name: 'kayıt-kanal-ayarla',
    description: '',
    usage: 'teyit-kanal <@kayitolmakanal>'
}
//