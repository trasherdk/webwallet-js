let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.qwertycoin.org/api/',
	mainnetExplorerUrl: "https://explorer.qwertycoin.org/",
	mainnetExplorerUrlHash: "https://explorer.qwertycoin.org/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.qwertycoin.org/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "https://testnet.qwertycoin.org/",
	testnetExplorerUrlHash: "https://testnet.qwertycoin.org/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "https://testnet.qwertycoin.org/?hash={ID}#blockchain_block",
	testnet: false,
    coinUnitPlaces: 8,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 6,         
	txCoinbaseMinConfirms: 6,
	addressPrefix: 1344012,
	integratedAddressPrefix: 112,
	addressPrefixTestnet: 1344012,
	integratedAddressPrefixTestnet: 112,
	subAddressPrefix: 113,
	subAddressPrefixTestnet: 113,
	coinFee: new JSBigInt('100000000'),
	feePerKB: new JSBigInt('100000000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'QWC',
	openAliasPrefix: "qwc",
	coinName: 'Qwertycoin',
	coinUriPrefix: 'qwertycoin:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};