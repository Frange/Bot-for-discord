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

var images1p = [
    { img: './newchallenger.jpg', xsize: 854, ysize: 480, x: 600, y: 240, rad: 130 },
    { img: './img/1p-1.jpg', xsize: 640, ysize: 360, x: 320, y: 130, rad: 60 },
    { img: './img/1p-2.jpg', xsize: 854, ysize: 480, x: 600, y: 240, rad: 130 },
    { img: './img/1p-3.jpg', xsize: 854, ysize: 480, x: 600, y: 240, rad: 130 }
];

async function mySend(client, userId) {

	const playerNumber = 1;
	const images = images1p;

	const user = client.users.cache.get(userId);
	const canvas = Canvas.createCanvas(images[randomNumber].xsize, images[randomNumber].ysize);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(images[randomNumber].img);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Modify this 3 parameters to change size and position of the avatar image.
	const xCenter = images[randomNumber].x; // Set X position of center circle.
	const yCenter = images[randomNumber].y; // Set Y position of center circle.
	const radious = images[randomNumber].rad; // Avatar size = radious * 2.

	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radious, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, (xCenter - radious), (yCenter - radious), (radious * 2), (radious * 2));

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	//client.users.cache.get('308564113431461888').send(`Hay un nuevo contrincante ${user.username}`, attachment);
	client.channels.cache.get(CHANNEL_JM).send(`Hay un nuevo contrincante ${user.username}`, attachment);
	// canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

module.exports = {
	fun: function (client, oldState, newState) {
		/*
		console.log(`OldState: Id: @${oldState.id}`);
		console.log(`OldState: Connection: @${oldState.connection}`);
		console.log(`OldState: Member: @${oldState.member}`);
		console.log(`OldState: Mude: @${oldState.mute}`);
		console.log(`OldState: SelfMute: @${oldState.selfMute}`);
		console.log(`OldState: Speaking: @${oldState.speaking}`);
		console.log(`OldState: channel: @${oldState.channel}`);
		console.log(`OldState: channelID: @${oldState.channelID}`);
		console.log(' ');
		console.log(`NewState: Id: @${newState.id}`);
		console.log(`NewState: Connection: @${newState.connection}`);
		console.log(`NewState: Member: @${newState.member}`);
		console.log(`NewState: Mute: @${newState.mute}`);
		console.log(`NewState: SelfMute: @${newState.selfMute}`);
		console.log(`NewState: Speaking: @${newState.speaking}`);
		console.log(`NewState: Channel: @${newState.channel}`);
		console.log(`NewState: ChannelID: @${newState.channelID}`);
		*/

		if (oldState != null && newState != null && newState.channelID != null &&
			(oldState.channelID == null ||
				(oldState.channelID != null && oldState.channelID != newState.channelID))) {
			const userName = client.users.cache.find((u) => u.id === newState.id).username;
			const channel = client.channels.cache.get(newState.channelID);

			const message = `@${userName} se ha conectado al chat de voz ${channel}`;

			if (newState.channelID === VOICE_CHANNEL_FALL_GUYS ||
				newState.channelID === VOICE_CHANNEL_AMONG_US) {
				console.log(' ');
				console.log(`VoiceStateUpdate - ${userName} se ha conecado a ${channel}`);
				mySend(client, newState.id);
				// client.channels.cache.get(CHANNEL_FALL_GUYS).send();
			}
		}
	},
};