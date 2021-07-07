import React, { useState, useEffect, useContext } from 'react'
import NFTcard from './NFTcard';
import { PlayerContext } from './PlayerContext';


export default function Cardlist() {
    const {player, setPlayer} = useContext(PlayerContext);
    return (
        <div class="container mx-auto mt-4">
            <div class="row">
                <NFTcard PlayerName= {player} TokenId= {"0"}/>
                <NFTcard PlayerName= {player} TokenId= {"1"}/>
                {/* <NFTcard PlayerName= {player} TokenId= {"2"}/>
                <NFTcard PlayerName= {player} TokenId= {"3"}/> */}
            </div>
        </div>
    )
}
