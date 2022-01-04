module.exports = {
    name: 'hello',
    aliases: ['hi', 'hey'],
    description: 'I tell you who i am!',
    execute(client, message, args, Discord){
        message.delete();
        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('*Hello*')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=813680943583330304&permissions=8&scope=bot')
        .setDescription('*<:atlanta_bot:598173448543666187> **From here you learn who I am :)***')
        .addFields(
            {name: 'Me', value: 'I am a discord bot called Soul_Bot. My creator is @Blackabutsi#0710. If who have any suggestions for me, just contact my creator :). Also, if you want to learn what my commands are, just type -help. Thanks!'},
            
        )
        .setImage('https://cdn.discordapp.com/attachments/812693452910231585/813702023638679572/download.png')
        .setFooter('This is me :), and make sure to type -rules to see the server rules :)');

        message.reply(newEmbed2);
    }
}