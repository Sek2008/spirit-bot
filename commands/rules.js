module.exports = {
    name: 'rules',
    aliases: ['r'],
    description: 'Sends the rules!',
    execute(client, message, args, Discord) {
        message.delete();
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('**Rules** **and** **Regulations**')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=813680943583330304&permissions=8&scope=bot')
        .addFields(
            {name: '1', value: 'No swearing of any kind.'},
            {name: '2', value: 'No teasing of any kind.'},
            {name: '3', value: 'No self promotion if you want to self promote go to #youtube:red_circle: #twitter:blue_circle: #twitch:purple_circle:.'},
            {name: '4', value: 'No NSFW content in any channels.'},
            {name: '5', value: 'No spamming.'},
            {name: '6', value: 'No hate speech.'},
            {name: '7', value: 'No politics or religion.'},
            {name: '8', value: 'Be respectful.'},
            {name: '9', value: 'Do not @ people excessively. First time is a warning, Second is a ban!'},
            {name: '10', value: 'Absolutely no sharing other peoples personal information / doxxing. 0 tolerance policy, you will be banned, immediately.'},
            {name: '11', value: 'Respect the moderators.'},
            {name: '12', value: 'Dont try to recruit people to go to your Discord server, it wont be tolerated.'}
        )
        .setImage('https://cdn.discordapp.com/attachments/814416468014792764/814436131189293066/rules_and_regulations.jpg')
        .setFooter('Please follow the rules!');

        message.channel.send(newEmbed);
        message.channel.send('**These are the rules!**');
    }
}