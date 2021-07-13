import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function NFTcard({PlayerName, TokenId}) {
    const [cardInfo, setCardInfo] = useState(undefined);
    const PlayerNAME  = PlayerName;
    const tokenID= TokenId; 
    const collectionURI = 'https://victorapi.herokuapp.com/api/'+PlayerNAME +'/' + tokenID;
    

    useEffect(() => {
        const init = async () => {
        //   const { nft } = await getBlockchain();
        //   const tokenURI = await nft.tokenURI(tokenID);
          const { data } = await axios.get(collectionURI);
          setCardInfo(data);
        };
        init();
      },[collectionURI, PlayerName]);
      if(typeof cardInfo === 'undefined') {
        return 'cardInfo undefined';
      }

    return (

          <div class="card">
            <img src={cardInfo.image} className="img-fluid" alt= "loading"/>
            <div class="card-body">
                <h4 class="h4 post-title">{"Card Name: "+ cardInfo.name}</h4>
                <p class="lead">{"Card Discription: "+ cardInfo.description}</p>
                <p class="lead">{"Date: "+ cardInfo.birthday}</p>
                <Link to= "/itemPage">
                <a href="#" class="btn mr-2"><i class="fas fa-link"></i> View More</a>
                </Link>
            </div>
          </div>

    )
}
