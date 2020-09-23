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

const Canvas = require('canvas');

const VOICE_CHANNEL_FALL_GUYS = '481523402645962759';
const CHANNEL_FALL_GUYS = '750723648100237363';

const VOICE_CHANNEL_AMONG_US = '753022620298903645';
const CHANNEL_AMONG_US = '753022463155372193';

async function mySend(userId) {
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
	ctx.drawImage(avatar, 600, 150, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	return attachment;
	//canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

module.exports = {
	fun: function (client, oldState, newState) {
		if (newState != null) {
			var userName = client.users.cache.find((u) => u.id === newState.id).username;
			var channel = client.channels.cache.get(newState.channelID);

			const message = `@${userName} se ha conectado al chat de voz ${channel}`;

			if (newState.channelID === VOICE_CHANNEL_FALL_GUYS) {
				console.log(' ');
				console.log(`VoiceStateUpdate - ${userName} se ha conecado a ${channel}`);
				client.channels.cache.get(CHANNEL_FALL_GUYS).send(mySend(newState.id));
			} else if (newState.channelID === VOICE_CHANNEL_AMONG_US) {
				console.log(' ');
				console.log(`VoiceStateUpdate - ${userName} se ha conecado a ${channel}`);
				client.channels.cache.get(CHANNEL_AMONG_US).send(mySend(newState.id));
			}
		}
	},
};