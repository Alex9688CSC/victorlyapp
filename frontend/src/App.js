import React, { useState, useContext } from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Nav from './components/nav';
import Footer from './components/footer';
import Collectionlist from './components/homePage/collectionlist';
import Cardlist from './components/collectionPage/cardlist';
import Profile from './components/collectionPage/profile';
import ItemPage from './components/itemPage/itempage';


import { PlayerContext } from './components/PlayerContext';
export const AppContext =React.createContext();

export default function App() {
    const [player, setPlayer] = useState('playerone');


    return (
        <Router>
            
            <Nav />

            <Switch> 
                <Route path= "/collectionPage">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <Profile />
                        <Cardlist />
                    </PlayerContext.Provider>
                </Route>  

                <Route path= "/itemPage">
                    <PlayerContext.Provider>
                        <ItemPage />
                    </PlayerContext.Provider>
                </Route>

                <Route path= "/">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <Collectionlist />
                    </PlayerContext.Provider>
                </Route>
            </Switch>

            <Footer />
        </Router>
    )
}



///////////

// export default function App() {

//     return (
//         <div>
//             <div class="row"> 
//                 <Nav />
//             </div>
//             <div class="row"> 
//                 <Body />
//                 <Footer />
//             </div>


            

            
//         </div>
//     )
// }
