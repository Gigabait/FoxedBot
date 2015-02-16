module.exports = {
	/* The name of the SteamBot */
	botName: "FoxedBot",

	/* The Steam username and password of the SteamBot */
	accountName: "<BotUsername>",
	password: "<BotPassword>",

	/* Steam Guard code: set to 'authCode: null,' once the bot is verified */
	authCode: "<SteamGuardCode>",


	/* The ServerKey of the SteamBot */
	serverKey: "ChangeMe!",

	/* The port that the SteamBot will listen on */
	botPort: 25000,


	/* Echo incoming message to the console */
	showChat: true,

	/* Sends messages even if the target is offline */
	sendOffline: false,

	/* The character that will be used to parse commands */
	commandChar: "!",

	/* Which SteamID64 are superadmins */
	admins: [
		"76561198035539471", // _FR_Starfox64 (Change us)
		"76561198013178101" // Larry Gibbons
	],

	/* Your Garry's Mod servers */
	servers: [
		{ // ServerID: 0
			name: "My Server #1",
			ip: "127.0.0.1",
			port: 25100
		},

		{ // ServerID: 1
			name: "My Server #2",
			ip: "127.0.0.1",
			port: 25101
		},

		{ // ServerID: 2
			name: "My Server #3",
			ip: "127.0.0.1",
			port: 25102
		}
	]
};