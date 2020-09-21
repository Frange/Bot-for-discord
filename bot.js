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
const ready = require('./events/ready.js');
const voiceStateUpdate = require('./events/voiceStateUpdate.js');

//EXPORTS
module.exports = { client, fs, canvas, MessageEmbed, cmd };

/*
// File A
const fooVariable = 'foo';
module.exports = { varToExport: fooVariable };

// File B
const fooVariable = require('./fileA').varToExport;
*/

client.once('ready', () => {
	ready.fun(client);
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
	voiceStateUpdate.fun(oldMember, newMember);
});

client.on('message', function(message) {
	message.fun(client, message);
});

client.login(process.env.TOKEN);