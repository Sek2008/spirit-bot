const request = require('superagent');

module.exports = {
    name: 'advice',
    description: 'Sends advices!',
    async execute(client, message, args, Discord, cmd) {
        request
            .get('http://api.adviceslip.com/advice')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    try {
                        JSON.parse(res.text)
                    } catch (e) {
                        return message.channel.send('An api error occurred.');
                    }
                    const advice = JSON.parse(res.text)
                    message.reply(advice.slip.advice)
                } else {
                console.error(`REST call failed: ${err}, status code: ${res.status}`)
                }
            });
        
    }
}