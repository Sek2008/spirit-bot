module.exports = {
    name: 'ban',
    description: 'Bans members...',
    execute(client, message, args) {
        let permission = message.member.hasPermission("ADMINISTRATOR");
        if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")
        else{
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban()
                message.reply('User has been banned!')
            }else{
                message.reply('You could not ban that member');
            }
         }
        }

}