/* eslint-disable no-unused-vars */

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

function say(message, args) {
	const sayMessage = args.join(' ');
	message.delete();
	message.channel.send(sayMessage);
}

