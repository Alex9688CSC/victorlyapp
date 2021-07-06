
import React, { useState, useEffect } from 'react';
// import getBlockchain from './ethereum.js';
import axios from 'axios';



export default function Collection({PlayerName}) {
    const [collectionInfo, setCollectionInfo] = useState(undefined);
    
    const  PlayerNAME  = PlayerName
    const collectionURI = 'https://victorapi.herokuapp.com/api/'+PlayerNAME +'/0';
    

    useEffect(() => {
        const init = async () => {
        //   const { nft } = await getBlockchain();
        //   const tokenURI = await nft.tokenURI(tokenID);
          //console.log(collectionURI);
          const { data } = await axios.get(collectionURI);
          setCollectionInfo(data);
        };
        init();
      },[]);
      if(typeof collectionInfo === 'undefined') {
        return 'collectionInfo undefined';
      }

    return (
        <div class="card">
            <img src={collectionInfo.image} alt="loading" className="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">{"Collection Name: "+ collectionInfo.name}</h5>
                <p class="card-text">{"Collection Info: "+ collectionInfo.description}</p>
                <a href="#" class="btn btn-primary">View Collection</a>
            </div>
        </div>
    )
}

