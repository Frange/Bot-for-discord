const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const { readdirSync } = require("fs");
const { sep } = require("path");

const TOKEN = "-";
const FALL = 'fall';
const GUY = 'guy';
const FALL_GUYS = 'fall guys';
const AMONG = 'among';
const AMONG_US = 'among us';
const MONGOS = 'mongos';


global.__basedir = __dirname;

function hasCroke(message) {
	if (message.toLowerCase().includes('croke') || 
		message.toLowerCase().includes('cro') ||
		message.toLowerCase().includes('jorgito') ||
		message.toLowerCase().includes('george') ||
		message.toLowerCase().includes('jorge')) {

		return true;
	} else {
		return false;
	}
}

function sendRandomGameQuote(message) {
	var randomNumber = Math.floor((Math.random() * 10) + 1);
	console.log(`Random number: ${randomNumber}`);

	switch (randomNumber){
		case 1:
			message.channel.send(`Yo también me apuntaría, pero tengo que dar de comer al perro`);
		break;

		case 2:
			message.channel.send(`¡ Qué juegazo !`);
		break;

		case 3:
			message.channel.send(`Hoy gano fijo`);
		break;

		case 4:
			message.channel.send(`Me tengo que comprar el juego, que aún no le tengo`);
		break;

		case 5:
			message.channel.send(`Me han dicho @onirbos y @teje182 que también se apuntan a jugar`);
		break;

		case 6:
			message.reply(`Oye, avisa cuando empieces a jugar`);
		break;

		case 7:
			message.channel.send(`@Javitorius ¿ Te apuntas ?`);
		break;

		case 8:
			message.channel.send(`Entro en 15 minutos`);
		break;

		case 9:
			message.channel.send(`@Nuke182 ha dicho que juega en cuanto llegue, cene, acueste al peque, vea un rato la tele y vea los streamings del Rubius`);
		break;

		case 10:
			message.channel.send(`En la próxima partida os dejaré devastados, mutilados y perforados`);
		break;
	}
}

function sendRandomCrokeQuote(message) {
	var randomNumber = Math.floor((Math.random() * 10) + 1);
	console.log(`Random number: ${randomNumber}`);

	switch (randomNumber){
		case 1:
			message.channel.send(`Puto Croke`);
		break;

		case 2:
			message.channel.send(`Que te peten, Croke`);
		break;

		case 3:
			message.channel.send(`Maldito Croke`);
		break;

		case 4:
			message.channel.send(`Croke, a fregar`);
		break;

		case 5:
			message.channel.send(`Puto Cro`);
		break;

		case 6:
			message.reply(`Ya te digo, qué pesao es Croke`);
		break;

		case 7:
			message.channel.send(`Croketa`);
		break;

		case 8:
			message.channel.send(`Jodido Croke`);
		break;

		case 9:
			message.channel.send(`buuuu, Crokethinky, buuuu`);
		break;

		case 10:
			message.channel.send(`Crokethinky, sucia rata`);
		break;

	}
}

function sendRandomFunnyQuote(message) {
	const responses = [
	        `Una vez me hice tremenda paja a mano cambiada. Me llené el ojo de chele`,
	        `Hoy me ha salido mi primer vello púbico`,
	        `¿ Os hace unas partis ?`,
	        `Eso lo dices porque soy negro`,
	        `Tengo un hambre que me comería un caballo`,
	        `Ingiero gran cantidad de sano y nutritivo alcohol`,
	        `Me encanta comer... y fertilizar`,
	        `Multiplícate por cero, te has hecho amigo de los gilís`,
	        `¿ Cómo se llama eso que TAKA y a comer ?`,
	        `Lo hice con la mujer. Informa a los hombres`,
	        `¿ Qué me pillo, una robopilingui de trescientos pavos o trescientas robopilinguis de a dolar?`,
	        `¿ Qué clase de fiesta es esta ?, ¡ No hay alcohol y sólo se ve una furcia !`,
	        `¿ Habéis probado alguna vez a apagar la tele, sentarse con sus hijos y darles una paliza ?`,
	        `Chantaje es una palabra muy fea, yo prefiero… extorsión, la 'X' le da mucha clase`,
	        `@NoPrimeNoParty, de todos los amigos que he tenido, tú... el único`,
	        `El espacio... parece extenderse sin límites. Hasta que llegas al final y aparece un mono lanzándote barriles`,
	        `¿ Es esa tu cara ?, pensé que era tu trasero`,
	        `¡ Mi nombre es temido en cada sucio rincón de este chat !`,
	        `Voy a darme una vuelta por el Michi, A A A A A A`,
	        `Es como la historia del saltamontes y el pulpo: todo el año el saltamontes enterraba bellotas para el invierno, mientras que el pulpo jugaba con su novia y veía televisión. Cuando llegó el invierno, el saltamontes murió, y el pulpo se comió todas las bellotas y se compró un auto de carreras. ¿Entiendes lo que estoy diciendo?`,
	        `Dicen que el alcohol te hace estúpido, eso no posible es`,
	        `Tengo que dejar de atropellar gente. No soy lo suficientemente famoso como para librarme.`,
	        `Rechazo tu realidad y la cambio por la mía`,
	        `Cada palabra que sale de tu boca es una estupidez`,
	        `La gente se inventa estadísticas con tal de demostrar algo. Eso lo sabe el 14 porciento de la gente`,
	        `¿ Has bailado con el demonio a la luz de la luna ? muahahahahaha`,
	        `El aliento de mi gato huele a comida de gato`,
	        `Mosquis, un sexteto cervecil`,
	        `Los finales felices son historias sin acabar`,
	        `Me estoy comiendo una hamburguesa... mmmm, deliciosa, es como el sexo, salvo que ésta está a mi alcance`,
	        `Malditos hippies`,
	        `Vaya par de mogambos tiene la presentadora de Antena 3`,
	        `Mi mamá era tan pobre que se embarazó para sentir algo en la barriga`,
	        `¡ Mis graciosos comentarios no igualarás con acierto !`,
	        `¡ GIlÍIIIIIIIII !`,
	        `En 1992, estuve en una fiesta en la casa de Michael Douglas y me follé a Kim Basinger`,
	        `¿ Has visto a ese gilí ?`,
	        `Voy a poner mi propio servidor de Discord, con casinos y furcias. Es más, paso del casino`,
	        `Los pelirrojos no tienen alma`,
	        `Para mentir hace falta 2 personas, una que mienta y otra que escuche`,
	        `Núcelar, la palabra es núcelar`,
	        `¡ Eres el monstruo más feo jamás creado !`,
	        `Joe, vaya ñordo acabo de echar`,
	        `Soy capaz de absorver 2 litros de agua por vía anal de un sólo golpe... Eso lo hace muy poca gente`,
	        `Creo que hoy toca siesta de 3 horas`,
	        `¿ Alguien sabe dónde se celebrará este año el festival de Cannes ?`,
	        `¡ Por favor, no me comáis ! Tengo mujer e hijos... ¡ Comedlos a ellos !`,
	        ``,
	        `A diferencia del amor, el respeto no se compra`,
	        ``,
	        ``,
	        ``,
	        `! Quiero mi bocadillo !`,
	        ``,
	        ``,
	        `Cállate, cerebro. Ahora tengo amigos, ya no te necesito`,
	        ``,
	        `Ahora con Internet los niños se crían solos`,
	        ``,
	        ``,
	        `Voy a verme una peli, ¿ me recomendáis alguna ?`,
	        `Por el alcohol, causa y también solución de todos los problemas de la vida`,
	        `Comparad vuestras vidas con la mía… y luego podéis suicidaros`,
	        `Uff qué mal huele aquí... ¡ Coñe, si soy yo !`
	    ];

	const response = responses[Math.floor(Math.random() * responses.length)];
	console.log(`Respuesta: ${response}`);
	message.channel.send(response);
}

/*
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

*/

client.once('ready', () => {
	console.log(' ');
	console.log(' ');
	console.log(' ');
	console.log(' ');
	console.log(' ------------------------------');
	console.log('        Croke is ready!');
	console.log(' ------------------------------');
	console.log(' ');
	console.log(' ');
	console.log(' ');
	console.log(' ');
});

client.on("message", function(message) {
	if (message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
	if (message.content.startsWith(config.prefix)) {
		if (command === "ping") {
			//const m = await message.channel.send("Ping?");
			//m.edit(`Pong! Latencia: ${m.createdTimestamp - message.createdTimestamp}ms. Latencia API: ${Math.round(client.ping)}ms`);

			// send back "Pong." to the channel the message was sent in
			const timeTaken = Date.now() - message.createdTimestamp;
			message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
		}	

		if(command === "say") {
			// makes the bot say something and delete the message. As an example, it's open to anyone to use. 
			// To get the "message" itself we join the `args` back into a string with spaces: 
			const sayMessage = args.join(" ");
			// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
			message.delete().catch(O_o=>{ hi}); 
			// And we get the bot to say the thing: 
			message.channel.send(sayMessage);
		}		
	} else {
		console.log(`Message: ${message.content}`);
		if (hasCroke(message.content)) {

			var probability = Math.floor((Math.random() * 3) + 1);
			if (probability == 1) {
				sendRandomCrokeQuote(message);
			}
		} else if (
			message.content.toLowerCase().includes(FALL) || 
			message.content.toLowerCase().includes(GUY) || 
			message.content.toLowerCase().includes(AMONG) || 
			message.content.toLowerCase().includes(AMONG_US) || 
			message.content.toLowerCase().includes(MONGOS)) {
			//var probability = Math.floor((Math.random() * 2) + 1);
			//if (probability == 1) {
				sendRandomGameQuote(message);
			//}
		} else if (message.content.toLowerCase().includes('cuchara')) {
			message.reply(`Eso, eso, eso`);
		} else {
			var probability = Math.floor((Math.random() * 6) + 1);
			if (probability == 1) {
				sendRandomFunnyQuote(message);
			}
		}
	}
});

client.login(TOKEN);
