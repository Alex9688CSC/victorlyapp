
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PlayerContext } from '../PlayerContext';
import {Link} from 'react-router-dom'

export default function Collection({PlayerName}) {
    const [collectionInfo, setCollectionInfo] = useState(undefined);
    const  PlayerNAME  = PlayerName
    const collectionURI = 'https://victorapi.herokuapp.com/api/collections/'+ PlayerNAME ;
    
    const {setPlayer} = useContext(PlayerContext);
    

    useEffect(() => {
        const init = async () => {
          const { data } = await axios.get(collectionURI);
          setCollectionInfo(data);
        };
        init();
      });
      if(typeof collectionInfo === 'undefined') {
        return 'collectionInfo undefined';
      }

    return (
        <div class="card">
            <img src={collectionInfo.logoimg} style= {{height: "200px"}} alt="loading" className="img-fluid"/>
            <div class="card-body">
                <h2 class="post-title">{"Collection Name: "+ collectionInfo.collection_name}</h2>
                <p class="card-text">{"Collection Info: "+ collectionInfo.description}</p>
                <p>Lorem ipsum dolor sit amet, consectadipisicing elit, sed do eiusmod por incidid ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud lorem exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis en aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link to= "/collectionPage">
                  <button class = "btn btn-secondary btn-md-2" onClick= {() => setPlayer(PlayerNAME)}> View Collection</button>
                </Link>
            </div>
        </div>
    )
}

