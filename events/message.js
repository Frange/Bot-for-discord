/* eslint-disable indent */
// const discord = require('discord.js');
// const client = new discord.Client();

/*
// File A
const fooVariable = 'foo';
module.exports = { varToExport: fooVariable };

// File B
const fooVariable = require('./fileA').varToExport;
*/

// const exported = require('../bot.js').exports;
// const { cmd } = require('../bot.js');

// const ROL_FRANGE = '308564113431461888';
const ROL_GAYOLO = '753022904618319962';

const COMMAND_SAY = 's';
const COMMAND_HELP = 'h';
const COMMAND_CLEAR = 'c';
const COMMAND_JOIN = 'j';

// const CHANNEL_TESTING_BOTS = '753361148585312367';

module.exports = {
	fun: function(client, MessageEmbed, cmd, message) {

		if (message.author.bot) return;

		if (!message.content.startsWith(process.env.PREFIX)) {
			// var probability = Math.floor((Math.random() * 6) + 1);
			// if (probability == 1) {
			//	sendRandomFunnyQuote(message);
			// }
			return;
        }
		else {
			if (!message.member.roles.cache.has(ROL_GAYOLO)) return;

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
	},
};
