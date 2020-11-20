const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let teyitolmalog = await db.fetch(`teyitlog_${message.guild.id}`);
  let erkekrol = await db.fetch(`erkekrol_${message.guild.id}`);
  let üyerol = await db.fetch(`üyerol_${message.guild.id}`);
  let teyitkanal = await db.fetch(`teyitkanal_${message.guild.id}`);

  ///////////////////////
  var yetkilirol = await db.fetch(`yetkilirol_${message.guild.id}`, yetkilirol);
  let yetkilirol2 = message.guild.roles.find("name", yetkilirol);

  var kayıtsızrol = await db.fetch(
    `kayıtsızrol_${message.guild.id}`,
    kayıtsızrol
  );
  let kayıtsızrol2 = message.guild.roles.find("name", kayıtsızrol);

  if (!message.member.roles.has(yetkilirol2.id)) {
    message.channel.send(
      `<:ryzen_carpi:777235267933175848> Bu  Komutu Kullanmak İçin ${yetkilirol2} Rolune Sahip Olman Lazım.`
    );
  } else {
    //////////////////////

    let kullanıcı = message.mentions.members.first();
    if (!kullanıcı)
      return message.channel.send(`<:ryzen_carpi:777235267933175848> | Bir Kullanıcı İsmi girmelisin.`);
    let kullanıcı2 = message.mentions.members.first();
    if (!kullanıcı2) return;

    ////////////////////////////////////
    let member = args[0];
    if (!member)
      return message.channel.send(`<:ryzen_carpi:777235267933175848> | Bir Kullanıcı İsmi girmelisin.`);
    let isim = args[1];
    let yas = args[2];
    ////////////////////////////////////,

    let erkekrol2 = message.guild.roles.find("name", erkekrol);
    let üyerol2 = message.guild.roles.find("name", üyerol);
    const teyitolmakanal = message.guild.channels.find("name", teyitkanal);
    const teyitolmalog2 = message.guild.channels.find("name", teyitolmalog);
    ////////////////////////////////////

    if (!teyitkanal) return;
    if (message.channel.name !== teyitkanal)
      return message.channel
        .send(
          `<:ryzen_carpi:777235267933175848> | Bu komutu sadece ${teyitolmakanal} kanalında kullanabilirsin.`
        )
        .then(msg => msg.delete(10000));

    ////////////////////////////////////
    if (!isim) return message.channel.send(`<:ryzen_carpi:777235267933175848> | İsmini girmelisin.`);
    if (!yas) return message.channel.send(`<:ryzen_carpi:777235267933175848> | Yaşını girmelisin.`);

    ////////////////////////////////////
    kullanıcı.setNickname(`${isim} | ${yas}`);
    kullanıcı.addRole(üyerol2);
    kullanıcı.addRole(erkekrol2);
    kullanıcı.removeRole(kayıtsızrol2);
    ////////////////////////////////////

    //
    
    const dogrulandi = client.emojis.find(emoji => emoji.name === "ryzen_tik"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM ÖRN: evet)
    
    const embed = new Discord.RichEmbed()
      .setAuthor("Bir Erkek Kaydı Gerçekleşti")
      .addField(`<a:ryzen_tac:777235902501355550> Kaydı Yapılan Kişi:`, `${kullanıcı.user.tag}`)
      .addField(`<a:ryzen_tac:777235902501355550> Kaydı Yapan Yetkili:`, `${message.author.tag}`)
      .addField(`<a:ryzen_tac:777235902501355550> Belirlenen İsim:`, `${isim} | ${yas}`)
      .addField(`<a:ryzen_tac:777235902501355550> Verilen Roller:`, `${üyerol2} Ve  ${erkekrol2}`);
    let msg = await message.channel.send(embed)
        .then(function (msg) {
          msg.react(dogrulandi)
               
        });
    message.channel.send(
      `<:ryzen_tik:777235126769287189> | ${kullanıcı} Teyitin Tamamlandı!`
      .then(function (msg) {
          msg.react(dogrulandi)
               
        })
    );
    teyitolmalog2.send(embed);
    ////////////////////////////////////
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek','e'],
  kategori: "kayıt",
  permLevel: 0
};

exports.help = {
  name: "erkek",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "erkek kullanıcı isim yaş"
};
