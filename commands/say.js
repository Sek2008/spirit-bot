module.exports = {
    name: 'say',
    description: 'says what you said',
    execute(client, message, args, Discord) {
        message.delete();
        if(message.content.startsWith("-say")) {
            message.channel.send((message.content.replace('-say ','')));
            console.log((message.author.username) + " says: " + (message.content.replace('-say ','')));
            }
       
        }
    }
