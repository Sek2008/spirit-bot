module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'send the commands',
    execute(client, message, args, Discord, cmd) {
        message.delete();
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=813680943583330304&permissions=8&scope=bot')
        .addFields(
            {name: '-----------------------------------------------------------------------------------------', value: '---------------------------------------------------------------------------------------'},
            {name: '<:atlanta_administration_category:789030159419310101> ***Administration***', value: '.'},
            {name: 'Clear', value: 'You can delete messages, type -clear A_NUMBER, only works on administrators!'},
            {name: 'Kick', value: 'Kicks members, type -kick USER, only works on administrators!'},
            {name: 'Ban', value: 'Bans members, type -ban USER, only works on administrators!'},
            {name: 'Vote', value: 'Create a vote poll, type -vote QUESTION, only works on administrators!'},
            {name: 'Giveaway', value: 'Create a giveaway, type -giveaway, only works on administrators!'},
            {name: 'Vote Help', value: 'Sends the usage of the vote command, type -vote-help, only works on administrators!'},


            {name: '-----------------------------------------------------------------------------------------', value: '---------------------------------------------------------------------------------------'},
            {name: '<:atlanta_roles:598171057345658910> ***Information***', value: '.'},
            {name: 'Ping', value: 'This is the ping command , type -ping'},
            {name: 'Invite-link', value: 'You receive the discord bot invite link (so you can invite me in your server :), type -invite-link'},
            {name: 'Hello', value: 'I will tell you who i am!, type - hello'},
            {name: 'MC', value: 'Checks a minecraft server!, type -mc IP_PORT'},
            {name: 'Server Info', value: 'Show the server info, type -sinfo or -si or -serverinfo'},
            {name: 'User / Member Info', value: 'Show your profile statistics, type -ui or -userinfo or -memberinfo or -mi'},
            {name: 'Weather', value: 'Sends weather information, type -weather A_CITY'},
            {name: 'Covid', value: 'Sends covid statistics of a country!, type -covid A_COUNTRY'},
            {name: 'Help', value: 'You receive this message, type -help'},
            {name: 'Rules', value: 'Sends the servers rules!, type -r or -rules'},


            {name: '-----------------------------------------------------------------------------------------', value: '---------------------------------------------------------------------------------------'},
            {name: '<:atlanta_fun_category:789030226607996958> ***Fun***', value: '.'},
            {name: 'Image', value: 'Sends images, type -im (or -image) NAME_OF_A_PICTURE'},
            {name: 'Avatar', value: 'Sends your avatar, type -avatar'},
            {name: 'Dice Roll', value: 'Rolls a dice, type -roll'},
            {name: 'Coin Flip', value: 'Flips a coin, type -flip'},
            {name: 'Meme', value: 'Sends memes!, type -meme (needs some time to load)'},
            {name: 'Joke', value: 'Sends jokes!, type -joke'},
            {name: 'Advice', value: 'Sends some advice!, type -advice'},

        )
        
            const newEmbed1 = new Discord.MessageEmbed()
            .setColor('#304281')
            .addFields(

            {name: '-----------------------------------------------------------------------------------------', value: '---------------------------------------------------------------------------------------'},
            {name: '<:atlanta_kills:598174305599094784> ***Games***', value: '.'},
            {name: 'Tic Tac Toe', value: 'Play tic tac toe with me!, type -ttt'},
            {name: 'Snake Game', value: 'Play the classic snake game!, type -snake or -snakegame'},
            {name: 'Rock-Paper-Scissors', value: 'Play the classic Rock-Paper-Scissors game!, type -rps'},
        

            {name: '-----------------------------------------------------------------------------------------', value: '---------------------------------------------------------------------------------------'},
            {name: '<:fortnite:816584824180703233> ***Fortnite***', value: '.'},
            {name: 'Fortite', value: 'Get the statistics of a fortnite player!, type -ft A_PLAYER or -fortnite A_PLAYER'},
            {name: 'Fortnite Store', value: 'Sends the daily fortnite store!, type -ft-store or -fortnite-store'},
        

            {name: '-----------------------------------------------------------------------------------------', value: '---------------------------------------------------------------------------------------'},
            {name: '<:atlanta_custom_category:789029974379462686> ***Other***', value: '.'},
            {name: 'Help NSFW', value: 'Sends the nsfw commands. They only work in nsfw channels!'},
            {name: 'Ascii', value: 'Sends your text in ascii format!, type -ascii SOME_TEXT'},
            {name: 'Calculate', value: 'Solves some maths problems!, type -calculate SOME_MATHS'},
            {name: 'XP and Levels', value: 'You can see your level and xp! (you can improve by sending messages!), type -level or -xp'}
        )


        
        
        /*.addFields(
            {name: 'Ping', value: 'This is the ping command , type -ping'},
            {name: 'Help', value: 'You receive this message, type -help'},
            {name: 'Invite-link', value: 'You receive the discord bot invite link (so you can invite me in your server :), type -invite-link'},
            {name: 'Clear', value: 'You can delete messages, type -clear A_NUMBER, only works on administrators!'},
            {name: 'Kick', value: 'Kicks members, type -kick USER, only works on administrators!'},
            {name: 'Ban', value: 'Bans members, type -ban USER, only works on administrators!'},
            {name: 'Hello', value: 'I will tell you who i am!, type - hello'},
            {name: 'Say', value: 'Says what you said!, type -say YOUR_MESSAGE'},
            {name: 'MC', value: 'Checks a minecraft server!, type -mc IP_PORT'},
            {name: 'Image', value: 'Sends images, type -im (or -image) NAME_OF_A_PICTURE'},
            {name: 'Avatar', value: 'Sends your avatar, type -avatar'},
            {name: 'Rules', value: 'Sends the servers rules!, type -r or -rules'},
            {name: 'Suggestion', value: 'Sends us a suggestion, type -r or -sg YOUR_SUGGESTION_HERE'},
            {name: 'Server Info', value: 'Show the server info, type -sinfo or -si or -serverinfo'},
            {name: 'User / Member Info', value: 'Show your profile statistics, type -ui or -userinfo or -memberinfo or -mi'},
            {name: 'Dice Roll', value: 'Rolls a dice, type -roll'},
            {name: 'Coin Flip', value: 'Flips a coin, type -flip'},
            {name: 'Weather', value: 'Sends weather information, type -weather A_CITY'},
            {name: 'Meme', value: 'Sends memes!, type -meme'},
            {name: 'Joke', value: 'Sends jokes!, type -joke'},
            {name: 'Ascii', value: 'Sends your text in ascii format!, type -ascii SOME_TEXT'},
            {name: 'Calculate', value: 'Solves some maths problems!, type -calculate SOME_MATHS'},
            {name: 'Covid', value: 'Sends covid statistics of a country!, type -covid A_COUNTRY'},
            {name: 'Giveaway', value: 'Creates a giveaway - ONLY WORKS ON ADMINS, type -giveaway'},
            {name: 'Tic Tac Toe', value: 'Play tic tac toe with me!, type -ttt'},
            {name: 'Snake Game', value: 'Play the classic snake game!, type -snake or -snakegame'},
            {name: 'Rock-Paper-Scissors', value: 'Play the classic Rock-Paper-Scissors game!, type -rps'},
            {name: 'Announcements', value: 'Sends an announcement - ONLY WORKS ON ADMINS, type -announce THE_ANNOUNCEMENT'},
            {name: 'Fortite', value: 'Get the statistics of a fortnite player!, type -ft A_PLAYER or -fortnite A_PLAYER'},
            {name: 'Fortnite Store', value: 'Sends the daily fortnite store!, type -ft-store or -fortnite-store'},
            {name: 'XP and Levels', value: 'You can see your level and xp! (you can improve by sending messages!), type -level or -xp'}
        
        
            )*/
        .setFooter('Make sure to use the prefix (-) before each command!');

        message.author.send(newEmbed);
        message.author.send(newEmbed1);

        message.reply('**Check your DMs. Send you a DM with information!**');
    }
}