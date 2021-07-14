import React, { useState, useEffect, useContext } from 'react'
import NFTcard from './NFTcard';
import { PlayerContext } from '../PlayerContext';
import axios from 'axios';

export default function Cardlist() {
    const {player} = useContext(PlayerContext);
    const [playerInfo, setplayerInfo] = useState([]);
    const playerURI= 'https://victorapi.herokuapp.com/api/' + player;

    useEffect(() => {
        const init = async () => {
          const {data}  = await axios.get(playerURI);
          setplayerInfo(data);
        };
        init();
    },[playerURI]);

    //loop through the object to create the list
    const cardlist = Object.keys(playerInfo).map(key => {
        return <div>
            <br></br>
            <NFTcard PlayerName= {player} TokenId= {key}/>
        </div>
        
        }
    )

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

        // <div class="container mx-auto mt-4">
        //     <div class="row">
        //         {cardlist}
        //     </div>
        //     <br></br>
        // </div>
    )
}
