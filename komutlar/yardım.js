const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
   
    var s = 'tr'
  var a = client.commands.get('yardım').help.name
    if(db.has(`dil_${msg.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('yardım').help.enname
    }
    const dil = client[s]
    const o = a
 
  
  let prefix = await db.fetch(`prefix_${msg.guild.id}`) || client.ayarlar.prefix;
const footer = `[${dil.special.botinvite}](https://discord.com/oauth2/authorize?client_id=764490067586318388&scope=bot&permissions=2056&response_type=code) | [**Partner**](https://discord.gg/grafiktasarim) | [**Web Sitesi**](https://axyus.glitch.me/) `;

  var arg = ``
 if(args[0] === 'müzik') {
      let müzik = [`
**${prefix}oynat**: İstenilen şarkıyı oynatır. 
**${prefix}tekrar**: Çalan şarkıyı bittiği zaman tekrar oynatır. 
**${prefix}durdur**: Çalan şarkıyı durdurur. 
**${prefix}ses**: Şarkının sesini ayarlar. 
**${prefix}geç**: Sıradaki şarkıya geçer. 
**${prefix}kuyruk**: Şarkı kuyruğunu ve çalan şarkıyı gösterir.  

${footer}`];
      
            const müzikE = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(müzik)
          msg.channel.send(müzikE)
     return
    }else {
      var arg = args[0]
      }
  
  
  if(!args[0]) {var arg = args[0]}
  
  
  if(!args[0]) {var arg = args[0]}
  
 //let yana = await bot.emojis.get(bot.emojiler.yan);
let yana = "-";

let arr = [];
client.commands.forEach(x => {
if (!arr.includes(x.conf.kategori)) {
arr.push(x.conf.kategori)
}
})

let cats = arr.filter(x => x !== undefined).map(k => `<a:bluestar:772431181916536852> › **${prefix}${dil.yardımm} ${k}** ⇢  ${k.charAt(0).toUpperCase()+k.slice(1)} ${dil.showw}`).join("\n")
let bilgi =(`**${prefix}hata-bildir** Yazarak Hata Bildire Bildirsiniz. \n`)

  
  
  
  if (!arg) {
    
    /*  msg.channel.send(`# ${client.user.username} - Kategoriler

${cats}

> ${prefix}yardım [kategori] yazarak komutları görebilirsiniz.
`, {split: true, code: "md"})
*/
    
    const embed = new Discord.RichEmbed()
    .setAuthor(`${dil.menüü}`)
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail("https://i.hizliresim.com/ckExAV.png")
    .setImage("https://images-ext-2.discordapp.net/external/ypX9NA6oamgnP3RTYnNi-f1c-ybAfi-jFWttpaCN9Do/https/media0.giphy.com/media/X2aJeBLbMAWkgx5ycZ/giphy.gif")
    .setDescription(`
${footer}\n
${bilgi}
${dil.yardım.komuts}\n
${cats}


`)
.setTimestamp()
    msg.channel.send(embed)
  } else {
  
  let list = client.commands.filter(x => x.conf.kategori === arg)
  
  if (!arr.includes(arg)) return msg.channel.send(`**${arg}** ${dil.yardım.hata2}`)
  
  const cmds = Array.from(list.keys())
  const longest = cmds.reduce((long, str) => Math.max(long, str.length), 0);
  
 // msg.channel.send(list.map(k => `${k.help.name}${' '.repeat(longest - k.help.name.length)} :: ${k.help.description}`).join("\n"), {split: true, code: "asciidoc"})

    const e = new Discord.RichEmbed()
  .setColor('red')
  .setDescription(list.map(k => `**${prefix + k.help.name}**${' '.repeat(longest - k.help.name.length)}: ${k.help.description}`).join("\n") + `\n\n${footer}`)
.setImage("https://media.discordapp.net/attachments/756498615178100754/779326213683412992/standard_7.gif")
    msg.channel.send(e)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını listeler',
  usage: 'yardım [kategori]'
};
