import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { PlayerContext } from '../PlayerContext';
import getContract from '../../getContract';


export default function NFTcard({PlayerName, TokenId}) {
    const [cardInfo, setCardInfo] = useState(undefined);
    const [address, setaddress] = useState(undefined);
    const PlayerNAME  = PlayerName;
    const tokenID= TokenId; 

    //const collectionURI = 'https://victorapi.herokuapp.com/api/'+PlayerNAME +'/' + tokenID;
    
    const {setTokenId} = useContext(PlayerContext);

    useEffect(() => {
        const init = async () => {
          const { playernft } = await getContract(PlayerNAME);
          const tokenURI = await playernft.tokenURI(tokenID);
          const addr= await playernft.resolvedAddress;
          console.log(addr);
          setaddress(addr);
          const { data } = await axios.get(tokenURI);
          setCardInfo(data);
        };
        init();
      },[PlayerNAME,tokenID]);
      if(typeof cardInfo === 'undefined') {
        return 'card loading';
      }

    return (

          <div class="card">
            <img src={cardInfo.image} className="img-fluid" alt= "loading"/>
            <div class="card-body">
                <h4 class="h4 post-title">{"Card Name: "+ cardInfo.name}</h4>
                <p class="lead">{"Date: "+ cardInfo.birthday}</p>
                <Link to= "/itemPage">
                  <button class = "btn btn-secondary btn-md-2" onClick= {() => setTokenId(tokenID)}>View Card</button>
                </Link>
            </div>
          </div>

    )
}
