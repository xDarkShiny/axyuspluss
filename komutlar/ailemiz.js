const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`<a:kalp:755433699599843369> | **${guild.name}** - ÜYE SAYISI : **${guild.memberCount}** <:tik:741208345024659527>`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Ailemiz')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var !`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz'],
    kategori: 'yapımcı',
  permLevel: 5
};

exports.help = {
  name: "ailemiz",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};