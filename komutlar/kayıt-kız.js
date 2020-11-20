const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  ////////////////////////////////
  let teyitolmalog = await db.fetch(`teyitlog_${message.guild.id}`);
  let kızrol = await db.fetch(`kızrol_${message.guild.id}`);
  let üyerol = await db.fetch(`üyerol_${message.guild.id}`);
  let teyitkanal = await db.fetch(`teyitkanal_${message.guild.id}`);

  var yetkilirol = await db.fetch(`yetkilirol_${message.guild.id}`, yetkilirol);
  let yetkilirol2 = guild.roles.find("name", yetkilirol);
  if (
    !message.member.roles.has(
      db.fetch(`yetkilirol_${message.guild.id}`, yetkilirol)
    )
  )
    return message.channel.send(
      `<:ryzen_carpi:777235267933175848> Bu  Komutu Kullanmak İçin ${yetkilirol2} Rolune Sahip Olman Lazım.`
    );

  //////////////////////////////////

  /////////////////////////////////

  let kişi = message.mentions.members.first();
  if (!kişi) return;

  let kişi2 = message.mentions.members.first();
  if (!kişi2) return;

  const kayıt = message.guild.member;
  let guild = message.guild;
  let isim = args[1];
  let yas = args[2];
  let kızrol2 = guild.roles.find("name", kızrol);
  let üyerol2 = guild.roles.find("name", üyerol);
  const teyitolmakanal = message.guild.channels.find("name", teyitkanal);
  const teyitolmalog2 = message.guild.channels.find("name", teyitolmalog);
  ////////////////////////////////////
  //

  //////////////////////////////
  if (!teyitkanal) return;
  if (message.channel.name !== teyitkanal)
    return message.channel
      .send(
        `<:ryzen_carpi:777235267933175848> | Bu komutu sadece ${teyitolmakanal} kanalında kullanabilirsin.`
      )
      .then(msg => msg.delete(10000));
  let member = message.mentios.user.first() || client.users.get(args.join(" "));
  if (!member)
    return message.channel.send(`<:ryzen_carpi:777235267933175848> | Bir Kullanıcı İsmi girmelisin.`);
  if (!isim) return message.channel.send(`<:ryzen_carpi:777235267933175848> | İsmini girmelisin.`);
  if (!yas) return message.channel.send(`<:ryzen_carpi:777235267933175848> | Yaşını girmelisin.`);
  //////////////////////////////////////

  //////////////////////////////////////

  kayıt.setNickname(`${isim} | ${yas}`);
  kişi2.addRole(üyerol2);
  kişi.AddRole(kızrol2);

  ///////////////////////////////////////

  const embed = new Discord.RichEmbed()
    .setAuthor("Bir Kız Kaydı Gerçekleşti")
    .addField(`<a:ryzen_tac:777235902501355550> Kaydı Yapılan Kişi:`, `${kişi.user.tag}`)
    .addField(`<a:ryzen_tac:777235902501355550> Kaydı Yapan Yetkili:`, `${message.author.tag}`)
    .addField(`<a:ryzen_tac:777235902501355550> Belirlenen İsim:`, `${isim} | ${yas}`)
    .addField(`<a:ryzen_tac:777235902501355550> Verilen Roller:`, `${üyerol2} Ve  ${kızrol2}`);

  message.channel.send(
    `<:ryzen_tik:777235126769287189> | ${message.author} Kayıtın Tamamlandı!`
  );
  teyitolmalog2.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k", "kız"],
  kategori: "kayıt",
  permLevel: 0
};

exports.help = {
  name: "bayan",
  description: "teyit sistemi",
  usage: "bayan kullanıcı isim yaş"
};
