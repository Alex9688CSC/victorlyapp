const NFT = artifacts.require("NFT");
const PLAYERONE = artifacts.require("PLAYERONE");
const PLAYERTWO = artifacts.require("PLAYERTWO");

module.exports = async function (deployer, _network, accounts) {
  // await deployer.deploy(NFT);
  // const nft = await NFT.deployed();
  // await nft.mint(accounts[0], 0);
  // await nft.mint(accounts[0], 1);
  //deploy player one (Hank)
  await deployer.deploy(PLAYERONE);
  const playerone = await PLAYERONE.deployed();
  await playerone.mint(accounts[0], 0);
  await playerone.mint(accounts[0], 1);
  await playerone.mint(accounts[0], 2);
  await playerone.mint(accounts[0], 3);
  //deploy player two (Novak Djokovic)
  await deployer.deploy(PLAYERTWO);
  const playertwo = await PLAYERTWO.deployed();
  await playertwo.mint(accounts[0], 0);
  await playertwo.mint(accounts[0], 1);
//
};
