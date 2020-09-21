// const discord = require('discord.js');
// const client = new discord.Client();

module.exports = {
	say: function(message, args) {
		const sayMessage = args.join(' ');
		message.delete();
		message.channel.send(sayMessage);
	},
};