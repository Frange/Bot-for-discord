/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */

const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
client.commands = new Discord.Collection();
// const { promisify } = require('util');
const fs = require('fs');
// const readdir = promisify(require('fs').readdir);

// INCLUDES
const cmd = require('./commands/say.js');
const rol = require('./roles.js');
// const cons = require('./constant.js');

const COMMAND_SAY = 's';
const COMMAND_HELP = 'h';
const COMMAND_CLEAR = 'c';
const COMMAND_JOIN = 'j';

const CHANNEL_TESTING_BOTS = '753361148585312367';

client.once('ready', () => {
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
});

client.on('message', function(message) {
	if (message.author.bot) return;

	if (!message.content.startsWith(process.env.PREFIX)) {
		// var probability = Math.floor((Math.random() * 6) + 1);
		// if (probability == 1) {
		//	sendRandomFunnyQuote(message);
		// }
		return;
	}
	else {
		if (!message.member.roles.cache.has(rol.ROL_GAYOLO)) return;

		const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();

		console.log(`Usuario: ${message.member}`);
		switch (command) {
			case COMMAND_HELP: {
				const embed = new MessageEmbed()
					.setTitle('Ayuda General del Bot')
					.setColor(0xff0000)
					// .setDescription("-------------------------------------------")
					.addField('!h -> HELP', 'Muestra la lista de comandos.')
					.addField('!s -> SAY', 'Hace hablar a El trolasho con el texto que le pongas.');
				message.channel.send(embed);
				break;
			}
			case COMMAND_SAY: {
				cmd.say(message, args);
				break;
			}
			case COMMAND_CLEAR: {
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				// message.channel.send("Limpieza de Sable!!").then(msg => msg.delete({timeout: 60000}));
				break;
			}
			case COMMAND_JOIN: {
				message.delete();
				client.emit('guildMemberAdd', message.member);
				break;
			}
		}
	}
});

client.login(process.env.TOKEN);