module.exports = {
    name: 'ping',
    description: 'This is the ping command!',
    execute(client, message, args){
        message.channel.send('<a:atlanta_loading:743090350490648727> Loading Ping...')
        setTimeout(function(){ 
            message.channel.send(`<:atlanta_stats:598179382657286152> Web Socket: ${Math.round(client.ws.ping)}ms.`);
         }, 2500);

    }
};