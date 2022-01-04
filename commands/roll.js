
module.exports = {
    name: 'roll',
    description: 'ROLLS A DICE',
    execute(client, message, args, Discord, cmd){
        message.channel.send(`:game_die: **${message.author.username}**, you rolled a **${Math.floor(Math.random() * 6) + 1}**!`);
    }
};
