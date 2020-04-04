---
{
  "title": "Wallet Load",
  "description": "A detailed guide about loading multiple wallets in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Wallet Load

There are two ways of loading your wallets in Wasabi, and you can load multiple wallets at the same time.
The synchronizing of your wallet happens fast and is very private by default.

[[toc]]

---

## Loading wallet step-by-step

### Wallet Explorer

1. On the right side of Wasabi is the `Wallet Explorer`, where you see an alphabetically sorted list of all the previously [generated](/using-wasabi/WalletGeneration.md) wallets.

![](/WalletExplorerUnloaded.png)

2. You can load a wallet simply by double clicking on it or by right-clicking on it and then choosing `Load Wallet`.
A coin will appear on the wallet icon to indicate the loaded wallets.

![](/WalletExplorerLoaded.png)

### Wallet Manager

3. Alternatively, you can select a wallet in the `Load Wallet` tab, and click the `load wallet` button.

![](/WalletManagerLoadWallet.png)

## Synchronization

### Filter download

As soon as you start Wasabi, it connects to the backend server with a new Tor identity and requests the [BIP 158 block filters](/using-wasabi/BIPs.md#bip-158-compact-block-filters-for-light-clients).
At the first start this can take a couple minutes because all filters need to be downloaded, but for the subsequent starts this is faster as only the most recent filters are requested.

### Filter scanning

When you load a wallet, it checks if the generated addresses within the gap limit hit against a block filter.
Most filter do not, and then the wallet is certain that this block does not contain a transaction of yours.
If a transaction of yours is in a block, then the corresponding filter will always be hit, and the wallet will know this is a relevant block for you.
There can be a small chance for a false positive where the filter matches, but the block actually does not contain a transaction.

### Block download

When a block filter hits, either a true match or a false positive, then this block is interesting for you and the wallet will get it.
If you have [a Bitcoin full node connected](/using-wasabi/BitcoinFullNode.md), then it will fetch the verified block locally.
If not, then Wasabi will connect to a random Bitcoin P2P node with a new Tor identity, request only this block for download, and then disconnect.
In this step, your Wasabi behaves like any other full node, and cannot be differentiated. 
