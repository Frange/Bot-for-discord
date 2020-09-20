/* eslint-disable no-undef */
/* eslint-disable indent */
const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
client.commands = new Discord.Collection();
// const { promisify } = require('util');
const fs = require('fs');
// const readdir = promisify(require('fs').readdir);

// const ROL_FRANGE = '308564113431461888';
const ROL_GAYOLO = '753022904618319962';

const CHANNEL_TESTING_BOTS = '753361148585312367';

const COMMAND_SAY = 's';
const COMMAND_HELP = 'h';
const COMMAND_CLEAR = 'c';
const COMMAND_JOIN = 'j';

client.once('ready', () => {
	console.log(' ');
	console.log(' ');
	console.log(' ');
	console.log(' ');
	console.log(' ------------------------------');
	console.log('        Bot is ready!');
	console.log(' ------------------------------');
	console.log(' ');
	console.log(' ');
	console.log(' ');
	console.log(' ');
	client.channels.cache
		.find(channel => channel.id === CHANNEL_TESTING_BOTS)
		.send('¡ He vuelto !');
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 80;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'testing-bots');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '27px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('¡ Bienvenido a Gayolada !', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}`, canvas.width / 2.5, canvas.height / 1.4);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`¡ Bienvenido a Gayolada !, ${member}`, attachment);
});

client.on('message', function(message) {
	if (message.author.bot) return;

	if (!message.content.startsWith(process.env.PREFIX)) {
		// var probability = Math.floor((Math.random() * 6) + 1);
		// if (probability == 1) {
		//	sendRandomFunnyQuote(message);
		// }
		return;
	}
	else {
		if (!message.member.roles.cache.has(ROL_GAYOLO)) return;

		const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();

		console.log(`Usuario: ${message.member}`);
		switch (command) {
			case COMMAND_HELP: {
				const embed = new MessageEmbed()
					.setTitle('Ayuda General del Bot')
					.setColor(0xff0000)
					// .setDescription("-------------------------------------------")
					.addField('!h -> HELP', 'Muestra la lista de comandos.')
					.addField('!s -> SAY', 'Hace hablar a El trolasho con el texto que le pongas.');
				message.channel.send(embed);
				break;
			}
			case COMMAND_SAY: {
				const sayMessage = args.join(' ');
				message.delete();
				message.channel.send(sayMessage);
				break;
			}
			case COMMAND_CLEAR: {
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				message.channel.bulkDelete(100);
				// message.channel.send("Limpieza de Sable!!").then(msg => msg.delete({timeout: 60000}));
				break;
			}
			case COMMAND_JOIN: {
				message.delete();
				client.emit('guildMemberAdd', message.member);
				break;
			}
		}
	}
});

const init = async () => {
	console.log(' HOLA');
	const cmdFiles = await readdir('./commands/');
	console.log(`Comandos disponibles: ${cmdFiles.length}`);
	cmdFiles.forEach(f => {
		if (!f.endsWith('.js')) return;
		console.log('Comando: !${f}');
		// const response = client.loadCommand(f);
		// if (response) console.log(response);
	});

	console.log('ADIOS');
	/*
	const evtFiles = await readdir('./events/');
	console.log(`Loading a total of ${evtFiles.length} events.`);
	evtFiles.forEach(file => {
	const eventName = file.split('.')[0];
	console.log(`Loading Event: ${eventName}`);
	const event = require(`./events/${file}`);
	// Bind the client to any event, before the existing arguments
	// provided by the discord.js event.
	// This line is awesome by the way. Just sayin'.
	client.on(eventName, event.bind(null, client));
	});
	*/

	// Generate a cache of client permissions for pretty perm names in commands.
	/* client.levelCache = {};
	for (let i = 0; i < client.config.permLevels.length; i++) {
		const thisLevel = client.config.permLevels[i];
		client.levelCache[thisLevel.name] = thisLevel.level;
	}
	*/
	console.log(' 1');
	// Here we login the client.
	console.log(' 2');

// End top-level async/await function.
};

// init();


client.login(process.env.TOKEN);