/* eslint-disable brace-style */

/*
	Properties
		channel
		channelID
		connection
		deaf
		guild
		id
		member
		mute
		selfDeaf
		selfMute
		selfVideo
		serverDeaf
		serverMute
		sessionID
		speaking
		streaming
*/

const Discord = require('discord.js');
const Canvas = require('canvas');

const VOICE_CHANNEL_FALL_GUYS = '481523402645962759';
const CHANNEL_FALL_GUYS = '750723648100237363';

const VOICE_CHANNEL_AMONG_US = '753022620298903645';
const CHANNEL_AMONG_US = '753022463155372193';

const CHANNEL_TESTING_BOTS = '753361148585312367';
const CHANNEL_JM = '758610849064681482';

async function mySend(client, userId) {
	const user = client.users.cache.get(userId);

	const canvas = Canvas.createCanvas(854, 480);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./newchallenger.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 100, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	//client.users.cache.get('308564113431461888').send(`Hay un nuevo contrincante ${user.username}`, attachment);
	client.channels.cache.get(CHANNEL_JM).send(`Hay un nuevo contrincante ${user.username}`, attachment);
	// canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

module.exports = {
	fun: function(client, oldState, newState) {
		if (newState != null) {
			const userName = client.users.cache.find((u) => u.id === newState.id).username;
			const channel = client.channels.cache.get(newState.channelID);

			const message = `@${userName} se ha conectado al chat de voz ${channel}`;

			if (newState.channelID === VOICE_CHANNEL_FALL_GUYS) {
				console.log(' ');
				console.log(`VoiceStateUpdate - ${userName} se ha conecado a ${channel}`);
				mySend(client, newState.id);
				// client.channels.cache.get(CHANNEL_FALL_GUYS).send();
			} else if (newState.channelID === VOICE_CHANNEL_AMONG_US) {
				console.log(' ');
				console.log(`VoiceStateUpdate - ${userName} se ha conecado a ${channel}`);
				mySend(client, newState.id);
				// client.channels.cache.get(CHANNEL_AMONG_US).send(mySend (client, newState.id));
			}
		}
	},
};