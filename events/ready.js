// const discord = require('discord.js');
// const client = new discord.Client();

module.exports = {
	fun: function(client, CHANNEL_TESTING_BOTS) {
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
