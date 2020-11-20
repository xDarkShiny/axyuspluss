const Discord = require('discord.js');
const Jimp = require('jimp');
const db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
  
   if(message.guild.id !== '756498614263742464') return message.channel.send('Bu komut sadece \`DESTEK\` sunucumda çalışmaktadır.')
 
  
    

     const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${bot.user.id}/check?userId=${message.author.id}`)
.set("Authorization", bot.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if (check == 1) {
    
    if(message.member.roles.has('767844718952185897') === true) return message.channel.send(`Zaten \`Javascript\` rolün bulunuyor fazlasını ne yapacaksın`)

 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('``Javascript`` rolünüzü aldınız\nBotu oyladığınız için teşekkürler.')
.setTimestamp()
  message.channel.send(embed)
  message.member.addRole('767844718952185897')

    } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
    message.channel.send(embed)
      return }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['js','javascript'],

  kategori: "kullanıcı",
    permLevel: 0,
};

exports.help = {
  name: 'javascript',
  description: 'Rol almanızı sağlar',
  usage: 'javascript'
};
