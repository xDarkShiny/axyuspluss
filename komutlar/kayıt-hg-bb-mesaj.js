const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Kayıt Hoşgeldin Mesajı İçin Örnek a!teyit-hgmesaj -uye- Sunucumuza Hoşgeldin Yetkililer Seninle  İlgilenicektir Not: Sadece -uye- Ve -server- Değişkenlerini Kullanınız Başka Bir Değişken Bulunmamaktadır.')
  
 message.channel.send('Kayıt hg mesajı `'+mesaj+'` Olarak ayarlandı.') 
 db.set(`teyithgmesaj_${message.guild.id}`, mesaj)  
};//
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['hg-mesaj'], 
  kategori: "kayıt",
  permLevel: 0
};

exports.help = {
  name: 'kayıt-hg-mesaj',
  description: 'teyit-hgmesaj', 
  usage: 'teyit-hgmesaj'
};