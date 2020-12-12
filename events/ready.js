/* eslint-disable no-unused-vars */
// const discord = require('discord.js');
// const client = new discord.Client();

// const exported = require('../bot.js').exports;

const CHANNEL_TESTING_BOTS = '753361148585312367';

module.exports = {
	fun: function(client) {
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
		const user = client.users.cache.get('308564113431461888');
		user.send('El trolasho ha vuelto');

		/*
		 client.channels.cache
			.find(channel => channel.id === CHANNEL_TESTING_BOTS)
			.send('¡ He vuelto !');
			*/
	},
};
