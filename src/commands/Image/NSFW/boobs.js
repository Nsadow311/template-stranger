const { MessageEmbed } = require('discord.js');
const Command = require('../../../structures/Command');
const fetch = require('node-fetch')

module.exports = class extends Command{
    constructor(...args) {
        super(...args, {
            aliases: ['boob'],
            description: 'Sends images of jiggly breasts',
            category: `NSFW`,
            nsfw: true
        });
    }
    
     async run( message, args)
    {
      
    
fetch(`https://nekobot.xyz/api/image?type=boobs`)
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