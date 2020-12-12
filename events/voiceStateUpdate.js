/* eslint-disable prefer-const */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inline-comments */
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

const images1p = [
	{ img: './newchallenger.jpg', xsize: 854, ysize: 480, x1: 600, y1: 240, rad: 130 },
	{ img: './img/1p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 130, rad: 40 },
	{ img: './img/1p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 127, rad: 40 },
	{ img: './img/1p-3.jpg', xsize: 640, ysize: 360, x1: 330, y1: 125, rad: 40 },
	{ img: './img/1p-4.jpg', xsize: 640, ysize: 360, x1: 330, y1: 125, rad: 40 },
];

const images2p = [
	{ img: './img/2p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 130, x2: 250, y2: 150, rad: 40 },
	{ img: './img/2p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 127, x2: 250, y2: 150, rad: 40 },
	{ img: './img/2p-3.jpg', xsize: 640, ysize: 360, x1: 330, y1: 125, x2: 250, y2: 150, rad: 40 },
];

const images3p = [
	{ img: './img/3p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, rad: 40 },
	{ img: './img/3p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, rad: 40 },
];

const images4p = [
	{ img: './img/4p-1.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-2.jpg', xsize: 640, ysize: 360, x1: 325, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-3.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-4.jpg', xsize: 640, ysize: 360, x1: 325, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
	{ img: './img/4p-5.jpg', xsize: 640, ysize: 360, x1: 330, y1: 110, x2: 250, y2: 150, x3: 410, y3: 150, x4: 410, y4: 150, rad: 40 },
];

async function renderAvatar(user, position, images, ctx) {
	let xCenter = 0;
	let yCenter = 0;
	let radious = 0;
	const randomNumber = 1;

	console.log(`Position: ${position}`);
	switch (position) {
		case 1: {
			// Modify this 3 parameters to change size and position of the avatar image.
			xCenter = images1p[randomNumber].x1; // Set X position of center circle.
			yCenter = images1p[randomNumber].y1; // Set Y position of center circle.
			radious = images1p[randomNumber].rad; // Avatar size = radious * 2.
			break;
		}
		case 2: {
			xCenter = images2p[randomNumber].x2;
			yCenter = images2p[randomNumber].y2;
			radious = images2p[randomNumber].rad;
			break;
		}
		case 3: {
			xCenter = images3p[randomNumber].x3;
			yCenter = images3p[randomNumber].y3;
			radious = images3p[randomNumber].rad;
			break;
		}
		case 4: {
			xCenter = images4p[randomNumber].x4;
			yCenter = images4p[randomNumber].y4;
			radious = images4p[randomNumber].rad;
			break;
		}
	}

	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radious, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();


	console.log('a ');
	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, (xCenter - radious), (yCenter - radious), (radious * 2), (radious * 2));
	console.log('b ');
}

async function mySend(client, userId, channel) {
	const randomNumber = 1;
	// let images = images3p;
	let size = 0, position = 1;

	const user = client.users.cache.get(userId);

	const canvas = Canvas.createCanvas(images3p[randomNumber].xsize, images3p[randomNumber].ysize);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(images3p[randomNumber].img);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	for (const [memberID, member] of channel.members) {
		size++;
	}

	console.log(`Size: ${size}`);
	console.log(' ');

	/*
	switch (size) {
		case 1: {
			images = images1p;
			break;
		}
		case 2: {
			images = images2p;
			break;
		}
		case 3: {
			images = images3p;
			break;
		}
		case 4: {
			images = images4p;
			break;
		}
	}
	*/

	console.log(' frg 1');
	renderAvatar(user, position, images3p, ctx);
	console.log(' frg 2');

	/*
	for (const [memberID, member] of channel.members) {
		console.log(`MemberID: ${memberID}`);
		console.log(`userId: ${userId}`);
		console.log(`user: ${user}`);
		// if (memberID != userId) {
			position++;
			console.log(`jm 1 `);
			user = client.users.cache.get(memberID);

			console.log(`jm 2 `);
			renderAvatar(user, position, images3p, ctx);
			console.log(`jm 3 `);
		// }
	}
	*/

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	// client.users.cache.get('308564113431461888').send(`Hay un nuevo contrincante ${user.username}`, attachment);
	client.channels.cache.get(CHANNEL_JM).send(`Hay un nuevo contrincante ${user.username}`, attachment);
	// canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

async function mySend2(client, userId) {
	const user = client.users.cache.get(userId);

	const canvas = Canvas.createCanvas(images3p[0].xsize, images3p[0].ysize);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(images3p[0].img);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Modify this 3 parameters to change size and position of the avatar image.
	const xCenter = images3p[0].x1; // Set X position of center circle.
	const yCenter = images3p[0].y2; // Set Y position of center circle.
	const radious = images3p[0].rad; // Avatar size = radious * 2.

	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radious, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, (xCenter - radious), (yCenter - radious), (radious * 2), (radious * 2));

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	// client.users.cache.get('308564113431461888').send(`Hay un nuevo contrincante ${user.username}`, attachment);
	client.channels.cache.get(CHANNEL_JM).send(`Hay un nuevo contrincante ${user.username}`, attachment);
	// canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

function removeMessages(client, channel) {
	console.log(`channel: ${channel}`);
}

module.exports = {
	fun: function(client, oldState, newState) {
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


2020-12-12T12:01:21.290282+00:00 app[worker.1]: OldState: oUserName: @Frange
2020-12-12T12:01:21.290348+00:00 app[worker.1]: OldState: oChannelId: @<#753020407589765290>
2020-12-12T12:01:27.942376+00:00 app[worker.1]: OldState: Id: @308564113431461888
2020-12-12T12:01:27.942477+00:00 app[worker.1]: OldState: Connection: @null
2020-12-12T12:01:27.942572+00:00 app[worker.1]: OldState: Member: @<@308564113431461888>
2020-12-12T12:01:27.942633+00:00 app[worker.1]: OldState: Mude: @false
2020-12-12T12:01:27.942701+00:00 app[worker.1]: OldState: SelfMute: @false
2020-12-12T12:01:27.942764+00:00 app[worker.1]: OldState: Speaking: @null
2020-12-12T12:01:27.942833+00:00 app[worker.1]: OldState: channel: @<#753020407589765290>
2020-12-12T12:01:27.942884+00:00 app[worker.1]: OldState: channelID: @753020407589765290
		*/

		console.log(' VoiceStateUpdate - FUN ');
		console.log(' ');
		if (oldState != null && oldState.channelID != null) {
			const oUserName = client.users.cache.find((u) => u.id === oldState.id).username;
			const oChannelId = oldState.channelID;
			console.log(`OldState: oUserName: @${oUserName}`);
			console.log(`OldState: oChannelId: @${oChannelId}`);

			if (oChannelId === VOICE_CHANNEL_AMONG_US) {
				console.log(' AMONG US');
			}
		}

		/*
		if (oldState != null && newState != null && newState.channelID != null &&
			(oldState.channelID == null ||
				(oldState.channelID != null && oldState.channelID != newState.channelID))) {
			const userName = client.users.cache.find((u) => u.id === newState.id).username;
			const channel = client.channels.cache.get(newState.channelID);

			removeMessages(client, channel);

			const message = `@${userName} se ha conectado al chat de voz ${channel}`;

			if (newState.channelID === VOICE_CHANNEL_FALL_GUYS ||
				newState.channelID === VOICE_CHANNEL_AMONG_US) {
				console.log(' ');
				console.log(`VoiceStateUpdate - ${userName} se ha conecado a ${channel}`);
				//mySend(client, newState.id, channel);
				mySend2(client, newState.id);
				// client.channels.cache.get(CHANNEL_FALL_GUYS).send();
			}
		}
		*/
	},
};