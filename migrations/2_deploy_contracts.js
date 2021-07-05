const NFT = artifacts.require("NFT");
const PLAYERTWO = artifacts.require("PLAYERTWO");

module.exports = async function (deployer, _network, accounts) {
  await deployer.deploy(NFT);
  const nft = await NFT.deployed();
  await nft.mint(accounts[0], 0);
  await nft.mint(accounts[0], 1);
  //deploy player two (Hank)
  await deployer.deploy(PLAYERTWO);
  const playertwo = await PLAYERTWO.deployed();
  await playertwo.mint(accounts[0], 0);
  await playertwo.mint(accounts[0], 1);

};
