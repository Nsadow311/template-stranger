const client = require('nekos.life');
const Discord = require("discord.js");
const neko = new client();
const Command = require('../../../structures/Command');


module.exports = class extends Command {
    constructor(...args) {
		super(...args, {
			aliases: ['hentaipussy'],
            description: `Sends Images/Gifs of Hentai pussy`,
            category: `NSFW`,
            nsfw: true
		});
	}

	async run(message, args) {
        
        
        const _neko = await neko.nsfw.pussy();
        const lewd = new Discord.MessageEmbed()
        
        .setColor("0xffffff")
        .setImage(_neko.url)
        .setTitle(`Click me!`)
        .setURL(_neko.url)
        .setFooter(`Powered by Nekos.life`)
        message.channel.send(lewd);
    
   }
}
