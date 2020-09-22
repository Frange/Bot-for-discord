// const discord = require('discord.js');
// const client = new discord.Client();

//const exported = require('../bot.js').exports;
const { client, fs, canvas, MessageEmbed, cmd } = require('../bot.js');

const CHANNEL_TESTING_BOTS = '753361148585312367';

module.exports = {
	fun: function() {
		console.log(' ');
		console.log(' ');
		console.log(' ');
		console.log(' ');
		console.log(' ------------------------------');
		console.log('        Bot is ready!');
		console.log(' ------------------------------');
		console.log(' ');
		console.log(' ');
		console.log(' ');
		console.log(' ');
		client.channels.cache
			.find(channel => channel.id === CHANNEL_TESTING_BOTS)
			.send('¡ He vuelto !');
	},
};
