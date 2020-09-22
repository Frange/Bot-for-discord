/* eslint-disable brace-style */
// const discord = require('discord.js');
// const client = new discord.Client();
// const exported = require('../bot.js').exports;

// const { client, fs, canvas, MessageEmbed, cmd } = require('../bot.js');

module.exports = {
	fun: function(client, oldState, newState) {
		console.log('VoiceStateUpdate');
		console.log(`channel: ${newState.channel}`);
		console.log(`channelID: ${newState.channelID}`);
		console.log(`connection: ${newState.connection}`);
		console.log(`deaf: ${newState.deaf}`);
		console.log(`guild: ${newState.guild}`);
		console.log(`id: ${newState.id}`);
		console.log(`member: ${newState.member}`);
		console.log(`streaming: ${newState.streaming}`);
		console.log(`speaking: ${newState.speaking}`);

		let oldChannel = oldState.voiceChannel; // the previous channel, if there was one
		let newChannel = newState.voiceChannel; // the current channel, if there is one
		  
		if (oldChannel != newChannel) {
			newChannel.join();
		}
	},
};