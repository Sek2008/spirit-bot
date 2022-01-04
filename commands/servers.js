module.exports = {
    name: 'servers',
    aliases: ['server', 's', 'ad', 'advert', 'advertise', 'advertising'],
    description: 'Sends some servers to join!',
    execute(client, message, args, Discord, cmd) {
        message.delete();
        const theafterbeingEmbed = new Discord.MessageEmbed()
        .setTitle("***Join the server!***")
        .addFields(
            {name: 'The After Being', value: 'Hey\nWelcome to The After Being Server where we\n:slight_smile: 1.Develop a 3d game that you can download in the discord server\n:grinning: 2.Have fun\n:fire: 3.Competitions\n:link: 4.Just chat\n:signal_strength: 5.Stream while we develop our game\n\n\n***Whats the server mainly is about?***\n1. So in the server were curently developing a game thats called theafterbeing\n\n\n***What are we looking for?***\n1. We are curently looking for 3d artists people to fund the project and even just for support!'}
            )
        .setThumbnail('https://cdn.discordapp.com/attachments/812697685172944929/816214342130335754/giphy.gif')
        .setFooter('Advertising by 𝓑𝓵𝓪𝓬𝓴𝓪𝓫𝓾𝓽𝓼𝓲#0710')        
        message.channel.send(theafterbeingEmbed);
        message.channel.send('Link: https://discord.gg/vxYfFkcuv9');
        message.channel.send("***If you want to advertise this server, copy the text :)***")
    }
}