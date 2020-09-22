/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */

/*
// File A
const fooVariable = 'foo';
module.exports = { varToExport: fooVariable };

// File B
const fooVariable = require('./fileA').varToExport;
*/

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

// EXPORTS
// module.exports = { client: client, fs: fs, canvas: canvas, embed: MessageEmbed, cmd: cmd };

client.once('ready', () => {
	readyEvent.fun(client);
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
	voiceStateUpdateEvent.fun(oldMember, newMember);
});

client.on('message', function(message) {
	messageEvent.fun(client, MessageEmbed, cmd, message);
});

client.login(process.env.TOKEN);