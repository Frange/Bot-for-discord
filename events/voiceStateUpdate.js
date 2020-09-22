/* eslint-disable brace-style */
// const discord = require('discord.js');
// const client = new discord.Client();
// const exported = require('../bot.js').exports;

// const { client, fs, canvas, MessageEmbed, cmd } = require('../bot.js');

module.exports = {
	fun: function(client, oldState, newState) {
		console.log('VoiceStateUpdate');
		console.log(`newState: ${newState}`);
		console.log(`oldState: ${oldState}`);
	},
};