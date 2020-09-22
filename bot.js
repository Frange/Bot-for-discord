/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */

const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const canvas = require('canvas');
const fs = require('fs');

// COMMANDS
const cmd = require('./commands/say.js');

// EVENTS
const readyEvent = require('./events/ready.js');
const voiceStateUpdateEvent = require('./events/voiceStateUpdate.js');
const messageEvent = require('./events/message.js');

client.once('ready', () => {
	readyEvent.fun();
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
	voiceStateUpdateEvent.fun(oldMember, newMember);
});

client.on('message', function(message) {
	messageEvent.fun(message);
});

client.login(process.env.TOKEN);

// EXPORTS
module.exports = { client: client, fs: fs, canvas: canvas, embed: MessageEmbed, cmd: cmd };
//module.exports = { client, fs, canvas, MessageEmbed, cmd };
