const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun!')
  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    return message.channel.send(`
Bancı Rolünü Ayarlamak İçin, Bancı Verilecek Rolü Etiketlemelisiniz
Örnek: \`a!yasaklama-yetkilisi @bansorumlusu\`

Eğer Etiketlenmiyorsa Rol Ayarlarından \`O Role Herkese Bu Rolden Bahsetme Yetkisi Tanı Vermelisiniz.\`
`)
  }
  message.channel.send(`${rol} Rolü Olan Her Kullanıcı İnsanları a!ban Komutu İle Banlayabilicektir Rolü Verirken Dikkatli Olunuz.`)
  db.set(`yasaklamaRol_${message.guild.id}`, rol.id)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasaklama-yetkilisi"],
  permLevel: 0
};

exports.help = {
  name: 'yasaklamayetkilisi',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};