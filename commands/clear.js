module.exports = {
    name: 'clear',
    description: 'Deletes messages',
    async execute(client, message, args) {
        let permission = message.member.hasPermission("ADMINISTRATOR");
        if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")
    else{
        if(!args[0]) return message.reply('Please send the amount of messages your want to clear!');
        if(isNaN(args[0])) return message.reply('Please send a real number!');

        if(args[0] > 100) return message.reply('You can not delete more than 100 messages!');
        if(args[0] < 1) return message.reply('You must delete more than one message!');

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
        
    }
}