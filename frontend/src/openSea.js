import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/1da3e22bc60a40a3914d04f78bc836dd')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})


export default seaport;
