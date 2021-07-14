import { ethers, Contract } from 'ethers';

export default async function getContract(PlayerNAME) {
    console.log (PlayerNAME);
    if(window.ethereum) { 
        // connect ethers.js with metamask https://stackoverflow.com/questions/60785630/how-to-connect-ethers-js-with-metamask
        await window.ethereum.enable(); 
        const provider = new ethers.providers.Web3Provider(window.ethereum); 
        const signer = provider.getSigner(); 
        // end
        const player= await import (`./contracts/${PlayerNAME}.json`);
        const playernft = new Contract(
          player.networks[window.ethereum.networkVersion].address,
          player.abi,
          signer
        );
        console.log (playernft.resolvedAddress);
        return ({playernft})
    }
}
