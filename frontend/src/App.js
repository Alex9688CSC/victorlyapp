import React, { useState } from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Nav from './components/nav';
import Footer from './components/footer';
import ScrollToTop from './ScrollToTop';
//Home Page components
import HomeProfile from './components/homePage/homeProfile';
import Collectionlist from './components/homePage/collectionlist';

//Collection page components
import Cardlist from './components/collectionPage/cardlist';
import ItemPage from './components/itemPage/itempage';
import CollectionProfile from './components/collectionPage/collectionProfile';



import { PlayerContext } from './components/PlayerContext';
export const AppContext =React.createContext();

export default function App() {
    const [player, setPlayer] = useState('playerone');

    const [tokenId, setTokenId] = useState('0')

    return (
        <Router>
            <ScrollToTop />
            <Nav />
            <Switch> 
                <Route path= "/collectionPage">
                    <PlayerContext.Provider value= {{player, setPlayer, tokenId, setTokenId}}>
                        <div class="container">
                            <div class="row mt50">
                                <div class="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <br></br>
                                    <div class="ui-block mb60 mt-3">
                                        <CollectionProfile/>
                                    </div>
                                </div>
                                <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                    <Cardlist />
                                </div>
                             </div>
                        </div>
                    </PlayerContext.Provider>
                </Route>  

                <Route path= "/itemPage">
                    <PlayerContext.Provider value= {{player, tokenId}}>
                        <ItemPage />
                    </PlayerContext.Provider>
                </Route>

                <Route path= "/">
                    <PlayerContext.Provider value= {{player, setPlayer}}>
                        <HomeProfile />
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
