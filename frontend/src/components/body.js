import React, { useState, useContext } from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Collectionlist from './homePage/collectionlist';
import Cardlist from './collectionPage/cardlist';
import Profile from './collectionPage/profile';
import itemPage from './itemPage/itempage';
import { PlayerContext } from './PlayerContext';

export default function Body() {
    const [player, setPlayer] = useState('playerone');


    return (
        <Router>
            <Switch> 
                <Route path= "/collectionPage">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <Profile />
                        <Cardlist />
                    </PlayerContext.Provider>
                </Route>  

                <Route path= "itemPage">
                    <PlayerContext.Provider>
                        <itemPage />
                    </PlayerContext.Provider>
                </Route>

                <Route path= "/">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <Collectionlist />
                    </PlayerContext.Provider>
                </Route>
            </Switch>
        </Router>
    )
}
