const { MessageEmbed } = require('discord.js');
const Command = require('../../../structures/Command');
const fetch = require('node-fetch')

module.exports = class extends Command{
    constructor(...args) {
        super(...args, {
            aliases: ['pussy'],
            description: 'Sends Lewd Images of Pussies',
            category: `NSFW`,
            nsfw: true
        });
    }
    
     async run( message, args)
    {
        if (!message.channel.nsfw) {
			return message.channel.send(`Hey, I get it, you like NSFW, but this isn't a channel for that...`)
		}
    
fetch(`https://nekobot.xyz/api/image?type=pussy`)
.then((res) => res.json())
.then((body) => {
	let embed = new MessageEmbed()
	.setTitle(`Click Me!`)
	.setURL(body.message)
    .setImage(body.message)
    .setColor("GOLD")
    message.channel.send(embed)
})
     }
    }