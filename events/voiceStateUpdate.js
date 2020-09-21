// const discord = require('discord.js');
// const client = new discord.Client();

module.exports = {
	fun: function(message, args) {
		const sayMessage = args.join(' ');
		message.delete();
		message.channel.send(sayMessage);
	},
};