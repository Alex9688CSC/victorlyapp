import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { PlayerContext } from '../PlayerContext';
import getContract from '../../getContract';


export default function NFTcard({ContractAdd, TokenId}) {
    //const [cardInfo, setCardInfo] = useState(undefined);
    //const [address, setaddress] = useState(undefined);
    //const PlayerNAME  = ContractAdd;
    //const tokenID= TokenId; 
    //const collectionURI = 'https://victorapi.herokuapp.com/api/'+PlayerNAME +'/' + tokenID;
    const {setTokenId} = useContext(PlayerContext);

    console.log(ContractAdd);
    console.log(TokenId);

    const [tokenInfo, setTokenInfo] 
    = useState({name: "name", image_url: "image"});

   
    
    //console.log(apiurl)
    useEffect(() => {
        const init = async () => {
          const apiurl = "https://api.opensea.io/api/v1/asset/"+ ContractAdd +"/" + TokenId;
          const {data}= await axios.get(apiurl);
          setTokenInfo(data);
          console.log(data);
          // const { playernft } = await getContract(PlayerNAME);
          // const tokenURI = await playernft.tokenURI(tokenID);
          // const addr= await playernft.resolvedAddress;
          // console.log(addr);
          // setaddress(addr);
          // const { data } = await axios.get(tokenURI);
          // setCardInfo(data);
        };
        init();
      },[ContractAdd, TokenId]);
      if(typeof tokenInfo === 'undefined') {
        return 'card loading';
      }

    return (

          <div class="card">
            <img src={tokenInfo.image_url} className="img-fluid" alt= "loading"/>
            <div class="card-body">
                <h4 class="h4 post-title">{"Card Name: "+ tokenInfo.name}</h4>
                <Link to= "/itemPage">
                  <button class = "btn btn-secondary btn-md-2" onClick= {() => setTokenId(TokenId)}>View Card</button>
                </Link>
            </div>
          </div>

    )
}
