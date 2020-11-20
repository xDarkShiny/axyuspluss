const {RichEmbed} = require("discord.js");
//const ayarlar = require('../ayarlar.json')// [package required: discord.js]
exports.run = async (client, message, args, level) => {
  //if(message.author.id !== "486817385051979786") return message.reply(bu komutu sadece Bot Sahibi kullanabilir!);
  // EMBED
  let embed = new RichEmbed()
  .setColor("RANDOM")
  .setTitle(`<a:gg:769879557003280394> Bot yeniden başlatılıyor... <a:gg:769879557003280394>`)
  .setImage("https://images-ext-1.discordapp.net/external/NuK-1Wn6PU93xuQDStRAmgdSVKuwI0JTFi-DKtqxu6o/https/images-ext-2.discordapp.net/external/ypX9NA6oamgnP3RTYnNi-f1c-ybAfi-jFWttpaCN9Do/https/media0.giphy.com/media/X2aJeBLbMAWkgx5ycZ/giphy.gif?width=400&height=226%22")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down

  console.log("Bot yeniden başlıyor...");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}; // end of code

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reeboot", "reset", "yenile", "yeniden-başlat"],
  permLevel: 5,
    kategori: "yapımcı",
 
};

exports.help = {
  name: "reboot",
  description: "Botu yeniden başlatır.",
  usage: "reboot",
 
};