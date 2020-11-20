const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
  const db = require('quick.db');
  

  
  let args = message.content.split(' ').slice(1);
  const hata = args.slice(0).join(' ');
  if (hata.length < 1) return message.reply('Lütfen hatayı bildiriniz')
 

    message.reply('Hatanız iletildi');

    var hataHook = new Discord.WebhookClient("775660362555981844", "bnW4NWJ0Lrg5UcWmrnPL78xYU6aVpzUrLZxFRrG8NTW6vgSS-nZIHI7WdXQeDq8Uhh4L")
// https://discord.com/api/webhooks/775660362555981844/bnW4NWJ0Lrg5UcWmrnPL78xYU6aVpzUrLZxFRrG8NTW6vgSS-nZIHI7WdXQeDq8Uhh4L
    var embed = new Discord.RichEmbed()
    .setColor("0x36393F")
    .setTitle(`› **Bende Bir Hata Bulmuşlar!** `)
    .addField(`<a:ayarlar:772431128145559575> Bildiren Kullanıcı`, message.author.tag)
    .addField(`<a:ayarlar:772431128145559575> Bildirilen Sunucu`, message.guild.name)
    .addField(`<a:ayarlar:772431128145559575> Bildirilen Hata`, hata)
    hataHook.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hata', 'bug', 'bug-bildir'],
  permLevel: 0,
    kategori: "bot",

};

exports.help = {
  name: 'hata-bildir',
  category: "iletisim",
  description: 'Bottaki bir hatayı bildirmenizi sağlar.',
  usage: 'hata-bildir <bulduğunuz hata>',
 
};