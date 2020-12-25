/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */

// DISCORD
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

// IMPORTS
const constants = require('./events/auxiliar/constants.js');
const voiceAux = require('./events/auxiliar/voiceAux.js');
const messageAux = require('./events/auxiliar/messageAux.js');

// EVENTS
const readyEvent = require('./events/ready.js');
const messageEvent = require('./events/message.js');
const voiceStateUpdateEvent = require('./events/voiceStateUpdate.js');

// MAIN EVENTS
client.once('ready', () => {
	readyEvent.fun(client);
});

client.on('message', function(message) {
	messageEvent.fun(constants, messageAux, client, MessageEmbed, message);
});

client.on('voiceStateUpdate', (oldState, newState) => {
	voiceStateUpdateEvent.fun(constants, voiceAux, client, oldState, newState);
});

client.login(process.env.TOKEN);