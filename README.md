# BITBOX Light
This is a fork of Bitbox SDK. It is a lightweight version of the library. Customer applications normally do not utilize many of the features that Bitbox offers. It is important for such applications to load fast and be responsive. This version of Bitbox is cut supporting only required functionalities for <a href="https://honest.cash">Honest.Cash</a>. This package is used in <a href="https://www.npmjs.com/package/simple-bitcoin-wallet">simple-bitcoin-wallet</a>.

# Size savings
* Mnemonics are generated only from English wordlist. All other languages have been removed.  
* Bip32-utils has been removed. Wallet class cannot create accounts anymore. It is not need as long as we create the mnemonics ourselves and import it with Wallet.fromSeed().  
* bitcoinjsmessage has been removed. Bitbox-light does not support signing messages.  
* Removed Socket class. It's no longer possible to listen for blocks and transactions. This can be implemented in few lines of code separately.

# BITBOX SDK
`bitbox-sdk` is a utility for creating great [Bitcoin Cash](https://www.bitcoincash.org) applications. If can be used from the command line or from within client/server apps.

Extensive documentation available at:

- [General docs](https://developer.bitcoin.com)
- [BITBOX API](https://developer.bitcoin.com/bitbox)

Open Source / Creative Commons Listings

- [assert](https://www.npmjs.com/package/assert) - MIT
- [axios](https://github.com/axios/axios) - MIT
- [babel](https://babeljs.io/docs/setup/) - MIT
- [bigi](https://www.npmjs.com/package/bigi) - none
- [bip21](https://github.com/bigearth/bip21) - ISC
- [bip39](https://github.com/bitcoinjs/bip39/blob/master/LICENSE) - ISC
- [bitcoin-ops](https://github.com/bigearth/bitcoin-ops) - MIT
- [bitcoinjs-lib](https://github.com/bigearth/bitcoinjs-lib) - MIT
- [bitcoinjs-message](https://github.com/bitcoinjs/bitcoinjs-message) - MIT
- [bs58](https://www.npmjs.com/package/bs58) - MIT
- [buffer](https://www.npmjs.com/package/buffer) - MIT
- [cashaddrjs](https://github.com/bitcoincashjs/cashaddrjs/blob/master/LICENSE) - MIT
- [chai](https://www.npmjs.com/package/chai) - MIT
- [chalk](https://www.npmjs.com/package/chalk) - MIT
- [clear](https://www.npmjs.com/package/clear) - none
- [commander](https://www.npmjs.com/package/commander) - MIT
- [cp-file](https://www.npmjs.com/package/cp-file) - MIT
- [ecurve](https://www.npmjs.com/package/ecurve) - MIT
- [figlet](https://www.npmjs.com/package/figlet) - MIT
- [git-clone](https://www.npmjs.com/package/git-clone) - ICS
- [ini](https://www.npmjs.com/package/ini) - ICS
- [mkdirp](https://www.npmjs.com/package/mkdirp) - MIT
- [mocha](https://www.npmjs.com/package/mocha) - MIT
- [node-cmd](https://www.npmjs.com/package/node-cmd) - DBAD
- [node-emoji](https://www.npmjs.com/package/node-emoji) - MIT
- [nyc](https://www.npmjs.com/package/nyc) - ICS
- [qrcode](https://www.npmjs.com/package/qrcode) - MIT
- [randombytes](https://www.npmjs.com/package/randombytes) - MIT
- [safe-buffer](https://www.npmjs.com/package/safe-buffer) - MIT
- [satoshi-bitcoin](https://www.npmjs.com/package/satoshi-bitcoin) - MIT
- [sinon](https://www.npmjs.com/package/sinon) - BSD-3-Clause
- [touch](https://www.npmjs.com/package/touch) - ISC

## Font awesome

[Cube icon](https://fontawesome.com/icons/cube?style=solid) available under [CC v4.0](https://creativecommons.org/licenses/by/4.0/)

[More info](https://developer.bitcoin.com/bitbox.html)
