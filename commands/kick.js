module.exports = {
    name: 'kick',
    description: 'Kicks members...',
    execute(client, message, args, Discord) {
        let permission = message.member.hasPermission("ADMINISTRATOR");
        if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")
        else{
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick()
                message.reply('User has been kicked!')
            }else{
                message.reply(`User can't be kicked!`);
            }
        }

    }
}