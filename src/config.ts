let global: any = typeof window !== 'undefined' ? window : self;
global.config = {
	nodeList: [
		"https://api.societatis.io/sslnode/"
	],
	electionApiUrl: "https://voting.qwertycoin.org/api",
	websiteApiUrl: "https://societatis.io/wp-json",
	mainnetExplorerUrl: "https://explorer.societatis.io/",
	mainnetExplorerUrlHash: "https://explorer.societatis.io/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.societatis.io/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "https://explorer.testnet.societatis.io/",
	testnetExplorerUrlHash: "https://explorer.testnet.societatis.io/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "https://explorer.testnet.societatis.io/?hash={ID}#blockchain_block",
	testnet: false,
	coinUnitPlaces: 8,
	coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,
	txCoinbaseMinConfirms: 10,
	addressPrefix: 0x199296,
	integratedAddressPrefix: 0x199296,
	addressPrefixTestnet: 0x199296,
	integratedAddressPrefixTestnet: 0x199297,
	subAddressPrefix: 0x199295,
	subAddressPrefixTestnet: 0x199295,
	coinFee: new JSBigInt('100000000'),
	feePerKB: new JSBigInt('100000000'),
	dustThreshold: new JSBigInt('100000'), //used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'SCTS',
	openAliasPrefix: "scts",
	coinName: 'Societatis',
	coinUriPrefix: 'societatis:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
	remoteNodeFee: 0.25,
	devFee: 1,
	devAddress: "SCTSf91g8G7DSypHKvk5dQcL8jYZJkTN4ZExANxaLojP72VgRZ9SMgu9A6DyZxDen5Lgtu39a5reGKok9nSYMe463ddfZDUjar"
};
