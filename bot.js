/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */

const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const myClient = new Discord.Client();
myClient.commands = new Discord.Collection();

const myCanvas = require('canvas');
const myFs = require('fs');

// COMMANDS
const myCmd = require('./commands/say.js');

// EVENTS
const readyEvent = require('./events/ready.js');
const voiceStateUpdateEvent = require('./events/voiceStateUpdate.js');
const messageEvent = require('./events/message.js');

myClient.once('ready', () => {
	readyEvent.fun();
});

myClient.on('voiceStateUpdate', (oldMember, newMember) => {
	voiceStateUpdateEvent.fun(oldMember, newMember);
});

myClient.on('message', function(message) {
	messageEvent.fun(message);
});

// EXPORTS
module.exports = { client: myClient, fs: myFs, canvas: myCanvas, embed: MessageEmbed, cmd: myCmd };


myClient.login(process.env.TOKEN);
//module.exports = { client, fs, canvas, MessageEmbed, cmd };
