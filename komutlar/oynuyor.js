const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
var OGON = message.guild.members.find("543436148056260608");
if(message.member !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
if(OGON) {
      let args = message.content.split(' ').slice(1).join(" ");
    if (!args) return message.channel.send("Lütfen oynuyor `yazısını` ayarlayınız.")
client.user.setActivity(args);
message.channel.send('Durum '+args+' olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
 
  permLevel: 5,
    kategori: "yapımcı"
};

module.exports.help = {
  name: 'oynuyor',
  description: '.',
  usage: 'dnd'
};