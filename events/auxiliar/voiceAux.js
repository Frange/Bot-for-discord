/* eslint-disable brace-style */
/* eslint-disable no-inline-comments */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function showLogs(oldState, newState) {
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
}

async function mySend(constants, voiceAux, client, userId, channel) {
	const randomNumber = 1;
	// let images = images3p;
	let size = 0; position = 1;

	const user = client.users.cache.get(userId);

	const canvas = constants.canvas.createCanvas(
		constants.images3p[randomNumber].xsize,
		constants.images3p[randomNumber].ysize);
	const ctx = canvas.getContext('2d');

	const background = await constants.canvas.loadImage(constants.images3p[randomNumber].img);
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
	voiceAux.renderAvatar(user, position, constants.images3p, ctx);
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

	const attachment = new constants.Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	// client.users.cache.get('308564113431461888').send(`Hay un nuevo contrincante ${user.username}`, attachment);
	client.channels.cache.get(constants.CHANNEL_JM).send(`Hay un nuevo contrincante ${user.username}`, attachment);
	// canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

async function mySend2(constants, client, userId) {
	const user = client.users.cache.get(userId);

	const canvas = constants.canvas.createCanvas(constants.images3p[0].xsize, constants.images3p[0].ysize);
	const ctx = canvas.getContext('2d');

	const background = await constants.canvas.loadImage(constants.images3p[0].img);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Modify this 3 parameters to change size and position of the avatar image.
	const xCenter = constants.images3p[0].x1; // Set X position of center circle.
	const yCenter = constants.images3p[0].y2; // Set Y position of center circle.
	const radious = constants.images3p[0].rad; // Avatar size = radious * 2.

	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radious, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await constants.canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, (xCenter - radious), (yCenter - radious), (radious * 2), (radious * 2));

	const attachment = new constants.Discord.MessageAttachment(canvas.toBuffer(), 'newChallenger.png');

	// client.users.cache.get('308564113431461888').send(`Hay un nuevo contrincante ${user.username}`, attachment);
	client.channels.cache.get(constants.CHANNEL_JM).send(`Hay un nuevo contrincante ${user.username}`, attachment);
	// canal.send(`Hay un nuevo contrincante ${member}`, attachment);
}

function removeMessages(client, channel) {
	console.log(`channel: ${channel}`);
}

function setMuteAll(client, channel, isMute) {
	console.log(`channel: ${channel}`);
}

function muteForAmongUs(constants, client, oldState, newState) {
	if (oldState != null && oldState.channelID != null) {
		const oUserName = client.users.cache.find((u) => u.id === oldState.id).username;
		const oChannelId = oldState.channelID;

		if (oChannelId === constants.VOICE_CHANNEL_AMONG_US) {
			console.log(' AMONG US');

			console.log(`OldState: oldState.id: @${oldState.id}`);
			console.log(`OldState: USER_FRANGE: @${constants.USER_FRANGE}`);

			console.log(`OldState: Mute: @${oldState.mute}`);
			console.log(`OldState: SelfMute: @${oldState.selfMute}`);
			console.log(`OldState: Speaking: @${oldState.speaking}`);

			if (oldState.id === constants.USER_FRANGE) {
				if (oldState.mute) {
					// ANTES ESTABA MUTEADO
					if (oldState.selfMute) {
						console.log(' 1 ANTES ESTABA MUTEADO Y SELF MUTEADO');
						setMuteAll(client, oChannelId, false, true);
					} else {
						console.log(' 2 ANTES ESTABA MUTEADO Y NO ESTABA SELF MUTEADO');
						setMuteAll(client, oChannelId, false, false);
					}
				} else {
					console.log(' ANTES ESTABA NO MUTEADO');
					setMuteAll(client, oChannelId, true);

					if (oldState.selfMute) {
						console.log(' 3 ANTES ESTABA SELF MUTEADO');
					} else {
						console.log(' 4 ANTES NO ESTABA SELF MUTEADO');
					}
				}
			}
		}
	}
}
