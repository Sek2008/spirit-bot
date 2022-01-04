module.exports = {
    name: 'invite-link',
    aliases: ['il', 'invite-bot', 'bot', 'client', 'invite-client'],
    description: 'This commands sends the invite link for the bot!',
    execute(client, message, args){
        message.reply('https://discord.com/api/oauth2/authorize?client_id=813680943583330304&permissions=8&scope=bot');
    }
}