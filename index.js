const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION "], disableEveryone: ["FALSE"] });
const fs = require('fs');
const prefix = "-";
const enmap = require('enmap');
const { send } = require('process');
const antispam = require('better-discord-antispam');
const figlet = require('figlet');
const math = require('mathjs');
const fetch = require('node-fetch');
const ms = require('ms');
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
const SnakeGame = require('snakecord');
const { CanvasSenpai } = require("canvas-senpai")
const welcome = require("./welcome");
welcome(client);
const { stripIndents } = require("common-tags");


const settings = new enmap({
    name: 'settings',
    autoFetch: true,
    cloneLevel: 'deep',
    fetchAll: true,
});



const Client = require("fortnite");
const ft = new Client('64a2b789-3ce5-4574-a786-f9c79ab6baf5');

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: false,
    gameOverTitle: "Game Over"
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*const invites = {}

        const getInviteCounts = async (guild) => {
            return await new Promise(resolve => {
                guild.fetchInvites().then(invites => {
                    const inviteCounter = {}

                    invites.forEach(invite => {
                        const { uses, inviter } = invite
                        const { username, discriminator } = inviter

                        const name = `${username}#${discriminator}`

                        inviteCounter[name] = (inviteCounter[name] || 0) + uses
                    })

                    resolve(inviteCounter)
                })
            })
        }

        client.guilds.cache.forEach(async (guild) => {
            invites[guild.id] = await getInviteCounts(guild)
            console.log('Invites:', invites[guild.id])
        })

        client.on('guildMemberAdd', async member => {
            const { guild } = member

            const invitesBefore = invites[guild.id]
            const invitesAfter = await getInviteCounts(guild)

            console.log('BEFORE:', invitesBefore)
            console.log('AFTER:', invitesAfter)

            for (const inviter in invitesAfter) {
                    const channel = guild.channels.cache.find(ch => ch.name === 'invites')
                    const count = invitesAfter[inviter]
                    channel.send(
                        `Welcome <@${member.user.id}> to our Server! Invited by ${inviter} (${count} invites)
                    `)
                    return;

            }
        })*/
////////////////////////////////////////////////////////////////////////////////////////////////



const TicTacToe = require('discord-tictactoe');
const bot = new TicTacToe({
    token: 'ODEzNjgwOTQzNTgzMzMwMzA0.YDS1bg.0CVWT_1Tr6CL8dcP5BUT55rjp5Q',
    language: 'en',
    command: '-ttt'
});
bot.connect().catch(() => console.error("Cannot connect TicTacToe bot"));




client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'snake' || command === 'snakegame') {
        return snakeGame.newGame(message);
    }
});



const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});






/*const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});*/






client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})














client.login('ODEzNjgwOTQzNTgzMzMwMzA0.YDS1bg.0CVWT_1Tr6CL8dcP5BUT55rjp5Q')































//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//for(const file of commandFiles){
//    const command = require(`./commands/${file}`);
//
//    client.commands.set(command.name, command);
//}


















client.once('ready', () => {
    client.user.setActivity('on ' + client.guilds.cache.size + ' servers | -help', { type: 'LISTENING' })



});















//    
//
//
//});

client.on('message', (message) => {
    console.log((message.author.username) + " says: " + (message.content) + " in: " + (message.channel.name));
});














































client.on('message', message => {
    if (message.content === '-testjoin') {
        client.emit('guildMemberAdd', message.member);
    }
});








client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const platforms = ["pc", "xb1", "psn"];



    if (command === 'fortnite-store' || command === 'ft-store') {
        const store = await ft.store();

        const embed = new Discord.MessageEmbed()
            .setColor("#9d4dbb")
            .setFooter("Fortnite store", message.author.displayAvatarURL)
            .setTimestamp();

        store.sort((a, b) => {
            return b.vbucks - a.vbucks;
        });

        store.forEach(el => {
            embed.addField(el.name, stripIndents`**- Rarity:** ${el.rarity}
            **- Price:** ${el.vbucks} v-bucks
            **- Image:** [Press Me](${el.image})`, true)
        });

        message.channel.send(embed);
    } else if (command === 'fortnite' || command === 'ft') {
        const lastWord = args[args.length - 1].toLowerCase();

        let platform, username;

        if (platforms.includes(lastWord)) {
            username = args.slice(0, args.length - 1).join(" ");
            platform = lastWord;
        } else {
            username = args.join(" ");
            platform = "pc";
        }

        const search = await ft.user(username, platform);

        if (!search.username) {
            return message.channel.send("Couldn't find that person, try again")
                .then(m => m.delete(5000));
        }

        const lifetime = search.stats.lifetime;
        const solo = search.stats.solo;
        const duo = search.stats.duo;
        const squad = search.stats.squad;

        const embed = new Discord.MessageEmbed()
            .setTitle(`${search.username} (${search.platform})`)
            .setURL(search.url)
            .setColor("#9d4dbb")
            .setFooter(`Fortnite stats`, message.author.displayAvatarURL)
            .setTimestamp()
            .addField("Solo:", stripIndents`**- Wins:** ${solo.wins}
            **- KD:** ${solo.kd}
            **- Kills:** ${solo.kills}
            **- Kills per match:** ${solo.kills_per_match}`, true)
            .addField("Duo:", stripIndents`**- Wins:** ${duo.wins}
            **- KD:** ${duo.kd}
            **- Kills:** ${duo.kills}
            **- Kills per match:** ${duo.kills_per_match}`, true)
            .addField("Squad:", stripIndents`**- Wins:** ${squad.wins}
            **- KD:** ${squad.kd}
            **- Kills:** ${squad.kills}
            **- Kills per match:** ${squad.kills_per_match}`, true)
            .addField("Lifetime:", stripIndents`**- Wins:** ${lifetime.wins}
            **- KD:** ${lifetime.kd}
            **- Kills:** ${lifetime.kills}`, false)

        message.channel.send(embed)
    }
})




















client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "ticket-setup") {
        // ticket-setup #channel

        let channel = message.mentions.channels.first();
        if (!channel) return message.reply("Usage: `-ticket-setup #channel`");

        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Ticket System")
            .setDescription("React to open a ticket!")
            .setFooter("Ticket System")
            .setColor("00ff00")
        );

        sent.react('🎫');
        settings.set(`${message.guild.id}-ticket`, sent.id);

        message.channel.send("Ticket System Setup Done!")
    }

    if (command === "close") {
        if (!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.delete();
    } else if (command === 'announce') {
        let permission = message.member.hasPermission("ADMINISTRATOR");
        if (!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")
        else {
            const channel2 = message.guild.channels.cache.find(ch => ch.name === 'announcements');
            if (!channel2) return message.reply("There is not an anouncements channel to send the announcemet. Type -announce-create to create a channel called announcements!")
            channel2.send("@everyone" + ", " + "a new announcement!")
            const AnnounceEmbed = new Discord.MessageEmbed()
            AnnounceEmbed.setTitle("Announcement by " + message.author.tag)
            AnnounceEmbed.setDescription((message.content.replace('-announce ', ' ')));
            AnnounceEmbed.setFooter('Announcement by ' + message.author.tag)
            channel2.send(AnnounceEmbed).then((msg) => {
                msg.react('👍');
                msg.react('👎');
                message.delete();
            })
            message.reply("Successfully sent an announcement in announcements.")
        }
    } else if (command === 'announce-create') {
        let permission = message.member.hasPermission("ADMINISTRATOR");
        if (!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")
        else {
            message.guild.channels.create('announcements', {
                type: 'text'
            })
            message.channel.send("Channel created! Resend the command!")
        }
    }

});

client.on('messageReactionAdd', async (reaction, user) => {
    if (user.partial) await user.fetch();
    if (reaction.partial) await reaction.fetch();
    if (reaction.message.partial) await reaction.message.fetch();

    if (user.bot) return;

    let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

    if (!ticketid) return;

    if (reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Welcome to your ticket!").setDescription("We will be with you shortly").setColor("00ff00"))
        })
    }
});



























client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "invites") {



        let member = message.mentions.members.first() || message.member;
        let invites2 = await message.guild.fetchInvites();
        let memberInvites = invites2.filter(i => i.inviter.id === member.user.id);

        if (memberInvites.size <= 0) {
            return message.channel.send(`${member.user.tag} did not invite anyone to ${message.guild.name}!`, (member === message.author ? null : member));
        }

        let content = memberInvites.map(i => i.code).join("\n")
        let index = 0;
        memberInvites.forEach(invite => index += invite.uses);

        let inviteEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Invites for ${member.user.tag}`)
            .addField(`Number of People Invited`, index)
            .addField(`Invite Codes`, content)
            .setTitle(`Invite's from ${member.user.tag}`)

        message.channel.send(inviteEmbed);

    }
})

const weather = require('weather-js');
client.on('message', message => {


    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "weather") {
        weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {

            if (!args[0]) return message.channel.send('Please specify a location')
            if (err) message.channel.send(err);
            if (result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x111111)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Celsius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)


            message.channel.send(weatherinfo)
        })
    }
})


client.on('message', async message => {


    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "ascii") {

        if (!args[0]) return message.channel.send('Please provide some text');

        const msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if (err) {
                console.log('Something went wrong');
                console.dir(err);
            }
            if (data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.channel.send('```' + data + '```')
        })
    }
})





client.on('message', async message => {


    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "calculate") {
        if (!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0x808080)
            .setTitle('Calculator')
            .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
})



client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "covid") {

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
            .setTitle('Missing arguments')
            .setColor(0xFF0000)
            .setDescription('You are missing some args (ex: ;covid all || ;covid Canada)')
            .setTimestamp()

        if (!args[0]) return message.channel.send(noArgs);

        if (args[0] === "all") {
            fetch(`https://covid19.mathdro.id/api`)
                .then(response => response.json())
                .then(data => {
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new Discord.MessageEmbed()
                        .setTitle(`Worldwide COVID-19 Stats 🌎`)
                        .addField('Confirmed Cases', confirmed)
                        .addField('Recovered', recovered)
                        .addField('Deaths', deaths)

                    message.channel.send(embed)
                })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
                .then(response => response.json())
                .then(data => {
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new Discord.MessageEmbed()
                        .setTitle(`COVID-19 Stats for **${countries}**`)
                        .addField('Confirmed Cases', confirmed)
                        .addField('Recovered', recovered)
                        .addField('Deaths', deaths)

                    message.channel.send(embed)
                }).catch(e => {
                    return message.channel.send('Invalid country provided')
                })
        }

    }
})





client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "giveaway") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You are not allowed to start giveaways');

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Please provide a channel');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae provide a valid duration');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners!');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('Ok then, I\'ll give away nothing');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: 'An Admin' ? message.author : null,

            messages: {
                giveaway: ('@everyone' ? "@everyone\n\n" : "") + "****GIVEAWAY****",
                giveawayEned: ('everyone' ? "@everyone\n\n" : "") + "****GIVEAWAY ENDED****",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congrats {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Giveaway starting in ${channel}`);

    }

})





client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "reroll") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You do not have permission to rerol giveaways');

        if (!args[0]) return message.channel.send('No giveaway ID provided');

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if (!giveaway) return message.channel.send('Couldn\'t find a giveaway with that ID/name');

        client.giveawaysManager.reroll(giveaway.messageID)
            .then(() => {
                message.channel.send('Giveaway rerolled')
            })
            .catch((e) => {
                if (e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)) {
                    message.channel.send('This giveaway hasn\'t ended yet')
                } else {
                    console.error(e);
                    message.channel.send('An error occured')
                }
            })

    }

})






/*client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "bal") {
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if (bal === null) bal = 0;

        message.channel.send(`${user} currently has ${bal} coins`)
    }

})





client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "buy") {
        let purchase = args.join(" ");
        if (!purchase) return message.channel.send('Please provide an item to buy')
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if (purchase === 'car' || 'Car') {
            if (db.has(`variable`, { items: ["Car"] })) {
                return message.reply("Already got a car bro!")

            } else {
                if (amount < 500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
                db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
                db.push(message.author.id, "Car");
                message.channel.send('Successfully bought one car')
            }
        }
        if (purchase === 'watch' || 'Watch') {
            if (amount < 250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch");
            message.channel.send('Successfully bought one car')
        } else if (purchase === 'house' || 'House') {
            if (amount < 600) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 600);
            db.push(message.author.id, "House");
            message.channel.send('Successfully bought a house')
        } else if (purchase === 'mc_account(nfa)' || 'MC_Account(nfa)') {
            if (amount < 15000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 15000);
            db.push(message.author.id, "mc account (nfa)");
            message.channel.send('Successfully bought one mc nfa account')
        } else if (purchase === 'minecraft_java' || 'Minecraft_Java') {
            if (amount < 30.000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 30.000);
            db.push(message.author.id, "Minecraftt_Java");
            message.channel.send('Successfully bought minecraft_java edition')
        } else {
            message.channel.send('There is not such a product to buy!');
        }

    }

})





client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "daily") {

        let user = message.author;
        let timeout = 86400000;
        let amount = 500;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
            message.channel.send(`Successfully added ${amount} coins to your account`)
        }



    }

})





client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "inventory") {
        let items = await db.fetch(message.author.id);
        if (items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
            .addField('Inventory', items)

        message.channel.send(Embed);

    }

})




client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "store") {
        const embed = new Discord.MessageEmbed()
            .setTitle('Store')
            .setDescription(`Car - 500 coins \n Watch - 250 coins \n House - 600 \n mc_account(nfa) - 15000 \n Minecraft_Java - 30000`)
            .setTimestamp();

        message.channel.send(embed);


    }

})

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == "work") {
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, you worked and earned ${amount} coins`)
        }

    }

})
*/






































































client.on("message", async message => {

    if (message.author.client) return;
    if (message.channel.type === 'dm') return;

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);

    if (!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);


    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;


    try {
        client.commands.get(command).run(client, message, args);

    } catch (error) {
        console.error(error);
    }
})













































client.on("message", message => {
    if (message.author.bot) return; // ignore bots
    
    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
    };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if (userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        const channel8 = message.guild.channels.cache.find(ch => ch.name === 'ranking-up')
        if(!channel8) return message.reply("There is not a channel called ranking-up. Contact an administrator to create a channel called `ranking-up` and then resend the command!");
        channel8.send("Congratulations " + message.author.toString() + `, you leveled up. You are now at level ` + userInfo.level + "!")
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd === "level" || cmd === 'xp') {
        var mentions = message.mentions.members.first();
        if (mentions) return message.reply("You can't see others level and xp!");
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(0x4286f4)
            .addField("Level", userInfo.level)
            .addField("XP", userInfo.xp + "/100");
        message.channel.send(embed);


    }
    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
    });
})

































