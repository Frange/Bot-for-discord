/* eslint-disable indent */

module.exports = {
	fun: function(constants, messageAux, client, MessageEmbed, message) {

		if (message.author.bot) return;

		if (!message.content.startsWith(process.env.PREFIX)) {
			// var probability = Math.floor((Math.random() * 6) + 1);
			// if (probability == 1) {
			//	sendRandomFunnyQuote(message);
			// }
			return;
        }
		else {
			if (!message.member.roles.cache.has(constants.ROL_GAYOLO)) return;

			const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
			const command = args.shift().toLowerCase();

			console.log(`Usuario: ${message.member}`);
			switch (command) {
                case constants.COMMAND_HELP: {
                    const embed = new MessageEmbed()
                        .setTitle('Ayuda General del Bot')
                        .setColor(0xff0000)
                        // .setDescription("-------------------------------------------")
                        .addField('!h -> HELP', 'Muestra la lista de comandos.')
                        .addField('!s -> SAY', 'Hace hablar a El trolasho con el texto que le pongas.');
                    message.channel.send(embed);
                    break;
                }
                case constants.COMMAND_SAY: {
                    messageAux.say(message, args);
                    break;
                }
                case constants.COMMAND_CLEAR: {
                    messageAux.clear(message);
                    break;
                }
                /*
                case constants.COMMAND_JOIN: {
                    message.delete();
                    client.emit('guildMemberAdd', message.member);
                    break;
                }
                */
			}
		}
	},
};
