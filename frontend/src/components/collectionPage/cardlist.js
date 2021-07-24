import React, { useState, useEffect, useContext } from 'react'
import NFTcard from './NFTcard';
import { PlayerContext } from '../PlayerContext';
import axios from 'axios';

export default function Cardlist() {
    //const {player} = useContext(PlayerContext);
    //const [playerInfo, setplayerInfo] = useState([]);
    //const playerURI= 'https://victorapi.herokuapp.com/api/' + player;
    //temp contract address and token ID 
    const contractadd= "0x495f947276749ce646f68ac8c248420045cb7b5e"
    const tokenList= ["45749335062038752940674280911685102351036440558945446077565406484643595681793", "45749335062038752940674280911685102351036440558945446077565406485743107309569"]
    
    // useEffect(() => {
    //     const init = async () => {
    //     //   const {data}  = await axios.get(playerURI);
    //     //   setplayerInfo(data);
    //     };
    //     init();
    // });



    const cardlist = tokenList.map((tokenId) => {
        return <div>
            <br></br>
            <NFTcard ContractAdd= {contractadd} TokenId= {tokenId}/>
        </div>
        
        }
    )

    //loop through the object to create the list
    // const cardlist = Object.keys(playerInfo).map(key => {
    //     return <div>
    //         <br></br>
    //         <NFTcard ContractAdd= {player} TokenId= {key}/>
    //     </div>
        
    //     }
    // )

    return (
        <div>
            <br></br>
            <br></br>
            <div class="crumina-module crumina-heading with-title-decoration">
                <h5 class="heading-title">Featured NFT Cards</h5>
            </div>
            {cardlist}
            <br></br>
        </div>
    )
}
