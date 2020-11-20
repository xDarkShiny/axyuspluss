const Discord = require('discord.js');

exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('Bu komutu kullanabilmek için `Emojileri Yönet` yetkisine sahip olmalısın.');
if(!args[0]) return message.channel.send('Bir link ve ad yazmalısın. `a!emojiekle https://images-ext-1.discordapp.net/external/NuK-1Wn6PU93xuQDStRAmgdSVKuwI0JTFi-DKtqxu6o/https/images-ext-2.discordapp.net/external/ypX9NA6oamgnP3RTYnNi-f1c-ybAfi-jFWttpaCN9Do/https/media0.giphy.com/media/X2aJeBLbMAWkgx5ycZ/giphy.gif`');
if(!args[0].endsWith('.png')) return message.channel.send('Doğru bir link yazmalısın.');
if(!args[1]) return message.channel.send('Bir emoji adı yazmalısın. `a!emojiekle https://images-ext-1.discordapp.net/external/NuK-1Wn6PU93xuQDStRAmgdSVKuwI0JTFi-DKtqxu6o/https/images-ext-2.discordapp.net/external/ypX9NA6oamgnP3RTYnNi-f1c-ybAfi-jFWttpaCN9Do/https/media0.giphy.com/media/X2aJeBLbMAWkgx5ycZ/giphy.gif erensibot`');
if(['ç', 'ö', 'ü', 'ş', 'İ', 'I', 'ğ', 'Ç', 'Ö', 'Ü', 'Ş', 'Ğ'].includes(args[1])) return message.channel.send('**Emoji adını yazarken Türkçe karakter kullanmamalısın!**');
message.guild.createEmoji(args[0], args.slice(1).join(' ')).then(s => {
message.channel.send(`${s.name} adında emoji oluşturuldu. (${s})`);
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiekle'],
      kategori: "kullanıcı",
  permLevel: 0
};
 
exports.help = {
  name: 'emoji-ekle'
};// codare ♥