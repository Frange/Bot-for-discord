/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */

const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

// Imports
const constants = require('./events/auxiliar/constants.js');
const voiceAux = require('./events/auxiliar/voiceAux.js');

// COMMANDS
const commands = require('./commands/say.js');

// EVENTS
const readyEvent = require('./events/ready.js');
const voiceStateUpdateEvent = require('./events/voiceStateUpdate.js');
const messageEvent = require('./events/message.js');

// EXPORTS
// module.exports = { client: client, fs: fs, canvas: canvas, embed: MessageEmbed, cmd: cmd };

client.once('ready', () => {
	readyEvent.fun(client);
});

client.on('voiceStateUpdate', (oldState, newState) => {
	voiceStateUpdateEvent.fun(constants, client, oldState, newState);
});

client.on('message', function(message) {
	messageEvent.fun(constants, client, MessageEmbed, commands, message);
});

client.login(process.env.TOKEN);