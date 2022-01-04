const giveMeAJoke = require('discord-jokes');

module.exports = {
    name: 'joke',
    aliases: ['jk', 'j'],
    description: 'Sends jokes!',
    async execute(client, message, args, Discord, cmd) {
        giveMeAJoke.getRandomDadJoke (function(joke) {
            message.channel.send(joke)
        })



    }
}