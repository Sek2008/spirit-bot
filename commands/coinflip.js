module.exports = {
    name: 'coinflip',
    aliases: ['flip', 'coin'],
    description: 'I flip a coin!',
    execute(client, message, args, Discord){
        let random = (Math.floor(Math.random() * Math.floor(2)));
        if(random === 0) {
          message.reply('Heads!');
        }
        else {
          message.reply('Tails!');
        }
 
    }
}