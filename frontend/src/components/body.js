import React, { useState, useContext } from 'react'
import Collectionlist from './Collectionlist';
import Cardlist from './Cardlist';
import Profile from './profile';
import { PlayerContext } from './PlayerContext';
export default function Body() {
    const [player, setPlayer] = useState('playerone');


    return (
        <div class="container-fluid">
            <div class="row content">
                <div class="col-sm-3 ">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <Collectionlist />
                    </PlayerContext.Provider>
                </div>
                <div class="col-md-8">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <Profile />
                        <Cardlist />
                    </PlayerContext.Provider>
                    
                </div>
            </div>
        </div>
    )
}
