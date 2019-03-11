![image](https://cdn.qwertycoin.org/images/press/other/qwc-github-3.png)
#### Master Build Status
[![Build Status](https://travis-ci.org/qwertycoin-org/webwallet-js.svg?branch=master)](https://travis-ci.org/qwertycoin-org/webwallet-js) [![Build status](https://ci.appveyor.com/api/projects/status/github/qwertycoin-org/webwallet-js?branch=master&svg=true)](https://ci.appveyor.com/project/qwertycoin-org/webwallet-js)

# Qwertycoin fork of Karbo fork of Masari Web Wallet - Fully client-side
This web wallet is doing everything client-side to give the best privacy to users.
The server is currently only used to optimize the communication with the daemon and compress the blockchain.  

Note: This requirement may be removed in the future once daemons evolve and return enough data.  

# Security
**No keys, seeds, or sensitive data is sent to the server**  
If you find a potential security issue, please contact me so we/I can patch it as soon as possible.  
Encryption is done with a certified library, [Tweetnacl.Js.](https://github.com/dchest/tweetnacl-js)

# Contributors and thanks
Developers:
- gnock (main)
- cryptochangements
- davehlong (initial adaptation of PHP Api for Bytecoin based coins)
- aiwe (adapted for Bytecoin/CryptoNote from Monero codebase)

Translations:
- English: too many people
- French: gnock
- Serbian cyrillic: girugameshh
- German: F0sching, Alex Nnian
- Hungarian: Gelesztaa
- Greek: GeraltOfTrivia
- Russian, Ukrainian: Aiwe
- Persian: M4hdi1995
- Japanse: 
- Korean: Xecute0101
- Chinese: 
- Arabic: 
- Hindi:

# Contributing
- You can help Masari by translation the wallet in your native language, it's really easy!  
Read [the translations guide](TRANSLATIONS.md) to get instructions on how to do that
- Report bugs & ideas to help us improve the web wallet by opening an issue 
- [Make a donation to Masari](https://www.masariwallet.com/#!donate)

# Forks / Other Coins
We have been receiving multiple coin developers help to fork it. As the time required to develop this project is heavy, please consider giving a mention to this project if you fork it.

If you are a developer of a Cryptonote/Monero fork and would like to get a fork, please contact us (@gnock on the [official Discord](https://discord.gg/eSb9ZdM)).

Depending on your coin specifics, I can provide support, maintenancem and development/updates for a payment in return - crypto only.
If you are not willing to pay for this service, please do not contact us and make us lose time.

The code is readable, it should be enough for you to use it.

# Features (non-exhaustive)
- Complete wallet sync without server side processing for security
- Receive/send history
- Mempool support to check incoming transfers
- Send coins - including QR code scanning and subaddress support
- Receive page to generate a custom QR code
- Import from private keys, mnemonic seed, or json file (exported by the wallet)
- Export private keys, mnemonic phrase, or json file (which include all the history)
- View only wallet
- Basic network stats

## Donate

```
QWC: QWC1K6XEhCC1WsZzT9RRVpc1MLXXdHVKt2BUGSrsmkkXAvqh52sVnNc1pYmoF2TEXsAvZnyPaZu8MW3S8EWHNfAh7X2xa63P7Y
```
```
BTC: 1DkocMNiqFkbjhCmG4sg9zYQbi4YuguFWw
```
```
ETH: 0xA660Fb28C06542258bd740973c17F2632dff2517
```
```
BCH: qz975ndvcechzywtz59xpkt2hhdzkzt3vvt8762yk9
```
```
XMR: 47gmN4GMQ17Veur5YEpru7eCQc5A65DaWUThZa9z9bP6jNMYXPKAyjDcAW4RzNYbRChEwnKu1H3qt9FPW9CnpwZgNscKawX
```
```
ETN: etnkJXJFqiH9FCt6Gq2HWHPeY92YFsmvKX7qaysvnV11M796Xmovo2nSu6EUCMnniqRqAhKX9AQp31GbG3M2DiVM3qRDSQ5Vwq
```

#### Thanks

Cryptonote Developers, Bytecoin Developers, Monero Developers, Karbo Developers, Qwertycoin Community
