/* eslint-disable brace-style */
// const discord = require('discord.js');
// const client = new discord.Client();
// const exported = require('../bot.js').exports;

// const { client, fs, canvas, MessageEmbed, cmd } = require('../bot.js');

module.exports = {
	fun: function(client, oldMember, newMember) {
		console.log('VoiceStateUpdate');
		let oldUserChannel = newMember.guild.channels.cache.get(oldMember.voiceChannelID);
		let newUserChannel = newMember.guild.channels.cache.get(newMember.voiceChannelID);
		if (oldMember.voice.channelID == newMember.voice.channelID) return;
		console.log(`newUserChannel: ${newUserChannel}`);
		console.log(`oldUserChannel: ${oldUserChannel}`);
		if (oldUserChannel === undefined && newUserChannel !== undefined) {
			// User Joins a voice channel
			console.log('User Joins a voice channel');
		} else if (newUserChannel === undefined) {
			// User leaves a voice channel
			console.log('User leaves a voice channel');
		}
	},
};