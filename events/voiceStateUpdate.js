/* eslint-disable prefer-const */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inline-comments */
/* eslint-disable brace-style */

/*
	Properties
		channel, channelID, connection, deaf, guild,
		id, member, mute, selfDeaf, selfMute, selfVideo,
		serverDeaf, serverMute, sessionID, speaking, streaming
*/

module.exports = {
	fun: function(constants, voiceAux, client, oldState, newState) {

		// console.log(`voiceAux: @${voiceAux}`);
		voiceAux.showLogs();

		// voiceAux.muteForAmongUs(constants, client, oldState, newState);

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
				//mySend(constants.voiceAux, client, newState.id, channel);
				mySend2(constants.voiceAux, client, newState.id);
				// client.channels.cache.get(CHANNEL_FALL_GUYS).send();
			}
		}
		*/
	},
};