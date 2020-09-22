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

const VOICE_CHANNEL_FALL_GUYS = '481523402645962759';
const CHANNEL_FALL_GUYS = '750723648100237363';

const VOICE_CHANNEL_AMONG_US = '753022620298903645';
const CHANNEL_AMONG_US = '753022463155372193';

module.exports = {
	fun: function (client, oldState, newState) {
		console.log('VoiceStateUpdate');
		console.log(`channel: ${newState.channel}`); 		// <#[channelID]>
		console.log(`channelID: ${newState.channelID}`);	// channelID
		console.log(`guild: ${newState.guild}`); 			// Server name
		console.log(`id: ${newState.id}`); 					// User id
		console.log(`member: ${newState.member}`);			// <@[User id>

		if (newState != null) {
			var userName = client.users.cache.find((u) => u.id === newState.id).username;
			console.log(userName);
			var channel = client.channels.cache.get(newState.channelID);
			console.log(channel);

			const message = `Hola ${userName}, bienvenido al char de voz de ${channel}`;

			if (newState.channelID === VOICE_CHANNEL_FALL_GUYS) {
				console.log(' ');
				console.log('Fall guys');
				client.channels.cache.get(CHANNEL_AMONG_US).send(message);
			} else if (newState.channelID === VOICE_CHANNEL_AMONG_US) {
				console.log(' ');
				console.log('Among Us');
				client.channels.cache.get(CHANNEL_AMONG_US).send(message);
			}
		}
	},
};