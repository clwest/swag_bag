# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

MVP
An app that will allow for giveaways or auction of items in a truly random way
User will set up a lottery and to win you must reply to the site with your twitter handle
fans will go to the site and interact with the contract to be entered into the giveaway
only one twitter account per address

Influencer buy an ad campaign on the site for giveaways and auctions(For a preset price)

Influencer's can have ads to generate revenue to pay for the giveaway

Store a doc-u-sign signed copy of contract with Influencer and AdsRevenue
Use chainlink for the doc-u-sign to ifps api call and storage

A funds contract will hold the initial cost of the giveaway

Initial cost will include the cost of the item given away, gas for users to interact with contract,
gas and link for the contract to interact with twitter api and any predetermined profits for both sides

At a determined point once the AdsRevenue.sol contract is funded, a Chainlink keeper will call the endLottery function and tweet out a the winner

The AdsRevenue.sol contract will hold the profits for the Influencer and the ad campaign that funded it

TODO:

1. build an api that will allow the contract to interact with Twitter API
2. connect twitter handle to contract account
3. only 1 twitter handle per address
   _/ Start over here tomorrow!!!!!!!!! See BELOW!!!!!!!/_
4. ifps server that has a chainlink api that can call a offchain documentation site

5. the swag giveaway will call the swaglottery.sol
6. once lottery is started the lottery contract will tweet out the twitter user handle and that they have entered the lottery contract
7. after a set amount of time the chainlink keeper will call the endLottery function and randomly choose a winner
8. MVP the lottery winner will be will show on the contract with a picture of the item they won that is hosted on IPFS
9. future will be able to mint an nft of what they won ie. tee shirt, water bottle, ect

Stack:

1. Crypto
2. ONE: "allow for transaction on any chain"
3. SmartContact: "Does smart contract things because I am high and I need to move on
4. Some centralized real life stuff/Chainlink/Filecoin/legalzoom/doc-u-sign/chainlink/and/or/filecoin/ensThing I heard about but missed out on because thats what I do: "Allows for onChain to offChain data"
5. UserInterFace

Why stop with just connecting a twitter account to an address why not do
Future Uses:

1. Create a DAO and connect to the below API
2. Create a Chainlink to "LegalZoomSmartContract/Doc-U-SignSmartContract/IPFS/API("Allows for offChain data to be store onChain ")
3. Connect the transaction to an .eth address
