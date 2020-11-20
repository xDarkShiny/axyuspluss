const Discord = require('discord.js')
const id = '775689326516240424'

exports.run = (client, message, args) => {
    const bildiri = args.join(" ")
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Lütfen geçerli bir bildiri yazın. Eğer boş/gereksiz bildiri gönderirseniz bottan engellenirsiniz.`)
            .setTimestamp()
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }
  
    const embed = new Discord.RichEmbed()
        .setDescription(`Bildiriniz başarıyla bot geliştiricisine iletilmiştir ${client.emojis.get(client.emojiler.evet)}`)
        .setTimestamp()
        .setColor("RANDOM")
    message.channel.send({embed})
    
    message.channel.createInvite({maxAge: 0}).then(async (invite) => {
        const embed = new Discord.RichEmbed()
            .addField(`<a:chromastar:772431261946871810> Bildiren Kişi`, message.author.tag)
            .addField(`<a:chromastar:772431261946871810> Bildirinin Yapıldığı Sunucu`, message.guild.name)
            .addField(`<a:chromastar:772431261946871810> Bildirinin Yapıldığı Sunucunun Davet Linki`, invite.url)
            .addField(`<a:chromastar:772431261946871810> Bildiri`, bildiri)
            .setColor("RANDOM")
            .setTimestamp()
        client.channels.get(id).send({embed})
      message.react('775689326516240424')
    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rapor', 'raporla', 'tavsiye', 'tavsiyeet', 'tavsiyet', 'öner', 'öneri', 'bildir'],
    permLevel: 0,
  kategori: "bot"
}

exports.help = {
    name: 'tavsiye',
    description: 'Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.',
    usage: 'tavsiye [bildiri]'
}