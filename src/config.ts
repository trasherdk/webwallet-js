let global: any = typeof window !== 'undefined' ? window : self;
global.config = {
	nodeList: [
		"https://api.societatis.io/sslnode/",
		"https://holon-01.societatis.io/sslnode/",
		"https://holon-03.societatis.io/sslnode/",
		"https://wallet.societatis.io/sslnode/"
	],
	websiteApiUrl: "https://societatis.iog/wp-json",

	mainnetExplorerUrl: "https://explorer.societatis.io/",
	mainnetExplorerUrlHash: "https://explorer.societatis.io/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.societatis.io/?hash={ID}#blockchain_block",

	testnet: false,
	coinUnitPlaces: 8,
	coinDisplayUnitPlaces: 2,
	txMinConfirms: 10,
	txCoinbaseMinConfirms: 10,

	addressPrefix: 0x199296,
	integratedAddressPrefix: 0x199297,
	subAddressPrefix: 0x199298,

	coinFee: new JSBigInt('10000'),
	feePerKB: new JSBigInt('10000'),
	dustThreshold: new JSBigInt('1000'), //used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
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
	devAddress: "SCTSWG4YNrAji9xN8dxY5T94hox3Yz2LTgP3BJTJTFVxPorRmCLVQ61g9sCbnK67umjoGrhEdhPoSEPBUGsnYhLC8216QXb2dh"
};
