/* eslint-disable no-inline-comments */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const Canvas = require('canvas');

const constants = require('./events/auxiliar/constants.js');
const voiceAux = require('./events/auxiliar/voiceAux.js');

async function renderAvatar(user, position, images, ctx) {
	let xCenter = 0;
	let yCenter = 0;
	let radious = 0;
	const randomNumber = 1;

	console.log(`Position: ${position}`);
	switch (position) {
	case 1: {
		// Modify this 3 parameters to change size and position of the avatar image.
		xCenter = constants.images1p[randomNumber].x1; // Set X position of center circle.
		yCenter = constants.images1p[randomNumber].y1; // Set Y position of center circle.
		radious = constants.images1p[randomNumber].rad; // Avatar size = radious * 2.
		break;
	}
	case 2: {
		xCenter = constants.images2p[randomNumber].x2;
		yCenter = constants.images2p[randomNumber].y2;
		radious = constants.images2p[randomNumber].rad;
		break;
	}
	case 3: {
		xCenter = constants.images3p[randomNumber].x3;
		yCenter = constants.images3p[randomNumber].y3;
		radious = constants.images3p[randomNumber].rad;
		break;
	}
	case 4: {
		xCenter = constants.images4p[randomNumber].x4;
		yCenter = constants.images4p[randomNumber].y4;
		radious = constants.images4p[randomNumber].rad;
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