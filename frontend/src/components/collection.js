
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PlayerContext } from './PlayerContext';

export default function Collection({PlayerName}) {
    const [collectionInfo, setCollectionInfo] = useState(undefined);
    const  PlayerNAME  = PlayerName
    const collectionURI = 'https://victorapi.herokuapp.com/api/collections/'+ PlayerNAME ;
    
    const {player, setPlayer} = useContext(PlayerContext);
    

    useEffect(() => {
        const init = async () => {
        //   const { nft } = await getBlockchain();
        //   const tokenURI = await nft.tokenURI(tokenID);
          //console.log(collectionURI);
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
            <img src={collectionInfo.logoimg} alt="loading" className="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">{"Collection Name: "+ collectionInfo.collection_name}</h5>
                <p class="card-text">{"Collection Info: "+ collectionInfo.description}</p>
                <button class = "btn btn-secondary btn-md-2" onClick= {() => setPlayer(PlayerNAME)}> View Collection</button>
            </div>
        </div>
    )
}

