const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {// can ♡ b#1010
if(isNaN(args[0])) return message.channel.send(`<a:no:769861387572609026> Rakam Belirtmelisin **Sınır : 100000 bine kadar mesaj silebilirsiniz.** \`Not : Biraz Zaman Alabilir\``);
if(args[0] > 100) {
if(args[0].split('')[1] === '0' && args[0].split('')[2] === '0') {
var kaçkere = 0;
var i = 0;
let d = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
for(i; i <= Number(args[0]); i++) {



if(args[0] > 9999) {
kaçkere = i.toString().split('')[0]+i.toString().split('')[1]+i.toString().split('')[2];
} else if(args[0] > 999) {
kaçkere = i.toString().split('')[0]+i.toString().split('')[1];
} else {
kaçkere = i.toString().split('')[0];
};
};

console.log(kaçkere)
let nbr = [];
var l = 0;
message.delete();
if(kaçkere > 0) {
/*for(var i=1; i <= kaçkere;i++) {*/



    var msg_size = 100;
    while (msg_size == 100) {
    if(l == kaçkere) return; 
    l++;
    const sd = await message.channel.fetchMessages({limit: 100});
let shp = [];
sd.forEach(a => {
data.add(`size.${message.id}.${a.author.id}`, 1);
data.set(`ok.${message.id}.${a.author.id}`, 'tm');
data.add(`sizee.${message.id}`, 1);
})
let sayı = 0;
sd.forEach(a => {
if(a.createdAt < Date.now()-1209600000) return sayı--;
sayı++
});
if(sayı <= 0) return message.channel.send("Silinen mesaj yok, mesajların iki haftadan eski olmadığından emin olun.");
message.channel.bulkDelete(100)
msg_size == 100;

/*};*/
if(l == kaçkere) {
setTimeout(async () => {
message.guild.members.forEach(async n => {
if(data.fetch(`k.${message.id}.${n.user.id}`)) {
nbr.push(`*${n.user.tag}:** ${data.fetch(`size.${message.id}.${n.user.id}`)}`)
}
});
message.channel.send(`${await data.fetch(`sizee.${message.id}`)} <a:onayl:769860723320684575> Mesaj silindi\n${nbr.join('\n')}`)
message.guild.members.forEach(n => {
if(data.fetch(`ok.${message.id}.${n.user.id}`)) {
data.delete(`size.${message.id}.${n.user.id}`);
data.delete(`ok.${message.id}.${n.user.id}`);
}
})
data.delete(`sizee.${message.id}`);
}, 1000)
};
};
};
};
} else {
message.channel.bulkDelete(args[0]);
};
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ultrasil", "purge"],
  kategori: "moderasyon",
  permLevel: 0
}

exports.help = {
  name: 'ultratemizleyici'
};// codare ♥