const client = require('nekos.life');
const Discord = require("discord.js");
const neko = new client();
const Command = require('../../../structures/Command');


module.exports = class extends Command {
    constructor(...args) {
		super(...args, {
			aliases: ['fox'],
            description: `Sends Images of Fox Girls`,
			category: `SFW`
		});
	}

	async run(message, args) {
       
        
        const _neko = await neko.sfw.foxGirl();
        const lewd = new Discord.MessageEmbed()
        
        .setColor("0xffffff")
        .setImage(_neko.url)
        .setTitle(`Click me!`)
        .setURL(_neko.url)
        .setFooter(`Powered by Nekos.life`)
        message.channel.send(lewd);
    
   }
}
