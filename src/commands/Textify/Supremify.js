const Discord = require('discord.js');
const Command = require('../../structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['supreme'],
            description: `Turns Regular text into supreme text`,
            category: `Textify`,
            args: true
            
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {	
    if (!args[0]) return message.channel.send("Please Add Text To Supremeify");
        
        const supreme = new Discord.MessageEmbed()
        .setColor('#de0000')
        .setTitle('Here\'s Your Supremeified Text')
        .setImage(`https://api.alexflipnote.dev/supreme?text=${args.join("%20")}`)
        .setFooter(`Requested By ${message.author.tag}`)
        .setFooter(`Credit Goes to Dimwitted IF6`)
        .setTimestcamp();
        
message.channel.send(supreme);
	}

};