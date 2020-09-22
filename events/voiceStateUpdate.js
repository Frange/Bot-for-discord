/* eslint-disable brace-style */
// const discord = require('discord.js');
// const client = new discord.Client();
//const exported = require('../bot.js').exports;

const { client, fs, canvas, MessageEmbed, cmd } = require('../bot.js');

module.exports = {
	fun: function(oldMember, newMember) {
		const newUserChannel = newMember.voiceChannel;
		const oldUserChannel = oldMember.voiceChannel;
		if (oldUserChannel === undefined && newUserChannel !== undefined) {
			// User Joins a voice channel
			console.log('User Joins a voice channel');
		} else if (newUserChannel === undefined) {
			// User leaves a voice channel
			console.log('User leaves a voice channel');
		}
	},
};