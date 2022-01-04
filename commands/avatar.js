const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'avatar',
    aliases: ['a'],
    description: 'Sends photo',
    execute(client, message, args, Discord) {
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        if (message.mentions.users.size > 0) {
          const avatarEmbed1 = new Discord.MessageEmbed()
            .setColor(0xFFFF00)
            .setTitle(`Avatar for ${message.mentions.users.first().username}:`)
            .setImage(`${avatar}`)
            message.channel.send(avatarEmbed1);
        } else {
          const avatarEmbed2 = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .setTitle(`Avatar for ${message.author.username}:`)
          .setImage(`${avatar + "?size=2048"}`)
          message.channel.send(avatarEmbed2);
        }
    }  
    
}