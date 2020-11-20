const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  


message.channel.send(`AxyUS Spam Korumasını Otomatik Yapar **Ha Bu Arda Tabikide Gerekli İzinleri Var İse Bunlar =>** \`YÖNETİCİ , MESAJLARI YÖNET\` .
`) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  kategori: "moderasyon",
  permLevel: 0
};

exports.help = {
  name: 'spamkoruması',
  description: 'otomatik korur.', 
  usage: 'sayaç'
};
