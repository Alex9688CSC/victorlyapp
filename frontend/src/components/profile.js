import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCollection, useConllection } from './CollectionContext';


export default function Profile() {
    const selectedCollection= useConllection();
    const [collectionInfo, setCollectionInfo] = useState(undefined);
    const  PlayerNAME  = 'playerone'
    const collectionURI = 'https://victorapi.herokuapp.com/api/collections/'+ PlayerNAME ;
    


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
        <div class="container mt-5">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <img src={collectionInfo.bannerimg} alt="loading" className="img-fluid"/>
                    <h1 class="display-4">{collectionInfo.collection_name}</h1>
                    <p class="lead">{collectionInfo.description}</p>
                </div>
            </div>
        </div>
    )
}
