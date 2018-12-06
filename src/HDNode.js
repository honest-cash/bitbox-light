import Bitcoin from "bitcoincashjs-lib"
import coininfo from "coininfo"
// bip32-utils is 144.66M!
// import bip32utils from "bip32-utils"

class HDNode {
  constructor(address) {
    this._address = address
  }

  fromSeed(rootSeedBuffer, network = "bitcoincash") {
    let bitcoincash
    if (network === "bitcoincash") bitcoincash = coininfo.bitcoincash.main
    else bitcoincash = coininfo.bitcoincash.test

    const bitcoincashBitcoinJSLib = bitcoincash.toBitcoinJS()
    return Bitcoin.HDNode.fromSeedBuffer(
      rootSeedBuffer,
      bitcoincashBitcoinJSLib
    )
  }

  toLegacyAddress(hdNode) {
    return hdNode.getAddress()
  }

  toCashAddress(hdNode, regtest = false) {
    return this._address.toCashAddress(hdNode.getAddress(), true, regtest)
  }

  toWIF(hdNode) {
    return hdNode.keyPair.toWIF()
  }

  toXPub(hdNode) {
    return hdNode.neutered().toBase58()
  }

  toXPriv(hdNode) {
    return hdNode.toBase58()
  }

  toKeyPair(hdNode) {
    return hdNode.keyPair
  }

  toPublicKey(hdNode) {
    return hdNode.getPublicKeyBuffer()
  }

  fromXPriv(xpriv) {
    let bitcoincash
    if (xpriv[0] === "x") bitcoincash = coininfo.bitcoincash.main
    else if (xpriv[0] === "t") bitcoincash = coininfo.bitcoincash.test

    const bitcoincashBitcoinJSLib = bitcoincash.toBitcoinJS()
    return Bitcoin.HDNode.fromBase58(xpriv, bitcoincashBitcoinJSLib)
  }

  fromXPub(xpub) {
    let bitcoincash
    if (xpub[0] === "x") bitcoincash = coininfo.bitcoincash.main
    else if (xpub[0] === "t") bitcoincash = coininfo.bitcoincash.test

    const bitcoincashBitcoinJSLib = bitcoincash.toBitcoinJS()
    return Bitcoin.HDNode.fromBase58(xpub, bitcoincashBitcoinJSLib)
  }

  derivePath(hdnode, path) {
    return hdnode.derivePath(path)
  }

  derive(hdnode, path) {
    return hdnode.derive(path)
  }

  deriveHardened(hdnode, path) {
    return hdnode.deriveHardened(path)
  }

  sign(hdnode, buffer) {
    return hdnode.sign(buffer)
  }

  verify(hdnode, buffer, signature) {
    return hdnode.verify(buffer, signature)
  }

  isPublic(hdnode) {
    return hdnode.isNeutered()
  }

  isPrivate(hdnode) {
    return !hdnode.isNeutered()
  }

  toIdentifier(hdnode) {
    return hdnode.getIdentifier()
  }

  fromBase58(base58, network) {
    return Bitcoin.HDNode.fromBase58(base58, network)
  }
  /**
  createAccount(hdNodes) {
    const arr = hdNodes.map(
      (item, index) => new bip32utils.Chain(item.neutered())
    )
    return new bip32utils.Account(arr)
  }

  createChain(hdNode) {
    return new bip32utils.Chain(hdNode)
  }
  */
}

export default HDNode
