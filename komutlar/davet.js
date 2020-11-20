const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');
    var s = 'tr'
  var a = client.commands.get('davet').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('davet').help.enname
    }
    const dil = client[s]
    const o = a
    const msg = message

  const davet = new Discord.RichEmbed()
.setColor("#2f3136")
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setDescription(`<a:bluediamond:772431166162075679>  *Hey Ben Axyus Beni Davet Edersen Çooooook Sevinirim İşte Bağlantılar*; \n\n <a:chromastar:772431261946871810> [**DESTEK SUNUCUSU**](https://discord.gg/vU5ZUjN) \n\n <a:chromastar:772431261946871810> [**DAVET**](https://discord.com/oauth2/authorize?client_id=764490067586318388&scope=bot&permissions=2056&response_type=code) \n\n <a:chromastar:772431261946871810> [**WEB SİTESİ**](https://axyus.glitch.me/) \n\n <a:pin:762595467757355029> [**PARTNER**](https://discord.gg/2Mnf83Vqs6) \n\n Son Olarak Hata İçin **a!hata-bildir**, Tavsiye İçin **a!tavsiye**, Öneri İçin **a!öneri**. `)
  .setImage("https://images-ext-1.discordapp.net/external/CT9vDvzkoLaUn2Vq1E0mWcIQQrlUWCf7KpN9B4Qa9rE/https/images-ext-1.discordapp.net/external/m1ojpL3z0dASFPICtBPC7vl511OJdlwa1WipN1rEL-Q/%253Fv%253D1603731757791/https/cdn.glitch.com/b8d46a98-2ead-4c93-846b-664e7a6a0c06%25252Fstandard%252520%25282%2529.gif?width=400&height=51")
message.channel.send(davet)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['linkler', 'destek', 'destek-sunucu', 'web', 'site', 'webpanel', 'web-panel', 'dashboard','invite'],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};