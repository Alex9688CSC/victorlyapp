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
        <div class="container mx-auto mt-4">
            <div class="row">
                {cardlist}
                {/* <NFTcard PlayerName= {player} TokenId= {"0"}/>
                <NFTcard PlayerName= {player} TokenId= {"1"}/>
                <NFTcard PlayerName= {player} TokenId= {"2"}/>
                <NFTcard PlayerName= {player} TokenId= {"3"}/> */}
            </div>
            <br></br>
        </div>
    )
}
