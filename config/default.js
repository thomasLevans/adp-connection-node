'use strict';

module.exports = {
	connect: {
		cert: {
			location: 'iatCerts/',
			filetypes: ['pem', 'key']
		},
		client: {
			// API CLient Client Creds
			/*id: 'b974132b-c60a-4a68-b328-b57f0d2e88af',
			secret: 'a312b12b-ef92-4a7c-996a-cf9dc991b3a1'*/

			// Suggestion box
			//id: 'd760d3e6-a7d4-4241-a09f-afd3c60f1b70',
			// secret: 'f971bcd4-21bc-470c-93f9-7681c53506f2'

			// API Client Auth Code
			/*id: '0eb539af-cb0b-4097-b1a4-3b34c0ee8d7b',
			secret: '2a41ec4e-b3d8-4dd2-879a-d7fe5c717d1c'*/

			// IAT API Client Auth Code
			id: 'ec762f06-7410-4f6d-aa82-969902c1836a',
			secret: '6daf2cd7-4604-46c0-ab43-a645a6571d34'
		},
		granttype: 'authorization_code',
		preconnecttypes: ['authorization_code'],
		securityoptions: 'SSL_OP_NO_SSLv3',
		tokenurl: 'https://iat-api.adp.com/auth/oauth/v2/token',
		authorizationurl: 'https://iat-accounts.adp.com/auth/oauth/v2/authorize',
		//tokenurl: 'https://apidit.nj.adp.com/auth/oauth/v2/token',
		//authorizationurl: 'https://apidit.nj.adp.com/auth/oauth/v2/authorize',
		callbackurl: 'http://localhost:8889/callback',
		responsetype: 'code',
		scope: 'openid',
		defaultexpiration: 3600
	},
	server: {
		host: 'localhost',
		port: 8889
	},
	db: {
		connection: 'localhost:27017'
	},
	request: {
		host: 'apimpiat.gslb.es.oneadp.com',
		port: 80,
		defaultrealm: 'ISI'
	},
	apirequest: {
		apiurl: 'https://iat-api.adp.com',
		host: 'iat-api.adp.com',
		port: 80,
		defaultrealm: 'ISI'
	},
	userProfile: {
		path: '/events/core/v1/mkpl-user-profile'
	}
};