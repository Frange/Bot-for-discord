/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

function showLogs() {
	console.log(`Hola`);
}

function clear(message) {
	message.channel.bulkDelete(100);
	message.channel.bulkDelete(100);
	message.channel.bulkDelete(100);
	message.channel.bulkDelete(100);
	message.channel.bulkDelete(100);
	// message.channel.send("Limpieza de Sable!!").then(msg => msg.delete({timeout: 60000}));
}

function sendMessage(client, channelId, message) {
	client.channels.cache.get(channelId).send(message);
}

function sendHelpMessage(message, embed) {
	message.channel.send(embed);
}

function say(message, args) {
	const sayMessage = args.join(' ');
	message.delete();
	message.channel.send(sayMessage);
}

