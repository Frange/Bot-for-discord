// const discord = require('discord.js');
// const client = new discord.Client();

// const exported = require('../bot').exports;
const { client, fs, canvas, MessageEmbed, cmd } = require('../bot.js');

module.exports = {
	say: function(message, args) {
		const sayMessage = args.join(' ');
		message.delete();
		message.channel.send(sayMessage);
	},
};