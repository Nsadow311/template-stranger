const Command = require('../../structures/Command');

const answers = [
	'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Fuhgeddaboudit.',
	'Ahaha! Really?!?',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!',
	'If you see this well this isnt an answer'
];

module.exports = class extends Command {

	constructor(...args) {
        super(...args, {
            aliases: ['8ball'],
            description: 'Ask a Question and you will get a answer',
			category: `Fun`,
			usage: '<prefix>8ball <question>?',
			
        });
    }

	async run(msg, ...question) {
		return msg.reply(question.join(' ').endsWith('?') ?
			`🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
			'🎱 That doesn\'t seem to be a question, please try again!');
	}

};
