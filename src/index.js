const MenuDocsClient = require('./structures/MenuDocsClient');
const config = require('../config.json');
const mongoose = require('mongoose')
const { MessageEmbed } = require('discord.js')

mongoose.connect( 'mongodb://localhost/djsdashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const client = new MenuDocsClient(config);

client.on('message', message => {

    const embed = new MessageEmbed()
    .setTitle('HAHA FUNNY')
    .setImage('https://media.discordapp.net/attachments/410940657423745030/498964776505049099/gdeepfry.gif')
	if (message.content.startsWith('funny')) {
		message.channel.send(embed);
	}
});

client.start();
