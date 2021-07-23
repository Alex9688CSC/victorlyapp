import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { PlayerContext } from '../PlayerContext';
import getContract from '../../getContract';
import seaport from '../../openSea';

export default function Itempage() {
    //const {player, tokenId} = useContext(PlayerContext); //for dynamic importing
    const [tokenInfo, setTokenInfo] 
    = useState({name: "name", animation_url: "animation", image_url: "image", description: "description"});
    const [collectionInfo, setcollectionInfo] = useState({name: "Loading Collection Name"})
    const [traitoneInfo, setTraitoneInfo] = useState({trait_type: "trait type", value: "value", max_value: "max value"});
    
    const [contractaddress, setContractaddress] = useState("0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656");
    const tokenId= "45749335062038752940674280911685102351036440558945446077565406484643595681793"; 
    const openSeaUrl= "https://testnets.opensea.io/assets/"+ contractaddress + "/" + tokenId
    
    //main net
    const apiurl = 'https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/113408749351555629576827107437318000209516833207260721875583300611684758978561/';

    //test net 
    //const testneturl= "https://testnets.opensea.io/assets/0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656/45749335062038752940674280911685102351036440558945446077565406485743107309569"
    
    
    const accountAddress= "0x652534BE050D9447FbE6B074348bA5652a0bb076";

    useEffect(() => {
        const init = async () => {
            //fetch token's metadata from opensea with its api
            const {data}= await axios.get(apiurl);
            setTokenInfo(data);
            const {collection}= data;
            setcollectionInfo(collection);
            const {traits}= data;
            setTraitoneInfo(traits[0]);

            console.log(data);
            console.log(collection);
            console.log(traits[0])

          //const { playernft } = await getContract(player);
          //const tokenURI = await playernft.tokenURI(tokenID);
          //const { data } = await axios.get(tokenURI);
          //setCardInfo(data);
          //const addr= await playernft.resolvedAddress;
          //setContractaddress(addr);

        //   console.log(contractaddress);
        //   const asset= {"tokenAddress": contractaddress, "tokenId": tokenId};
        //   const balancedata = await seaport.getAssetBalance({
        //     accountAddress, // string
        //     asset, // Asset
        // })
        
        // setBalance(balancedata);
        // console.log(balance);
        // const ownsKitty = balance.greaterThan(0)
        // console.log(ownsKitty);

        };
        init();
      },[apiurl]);

      

    return (
        <div class="container mt-5">
            
            <div class="shop-product-detail">
            <br></br>
            <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="thumbs-wrap">
                                {/* <div class="small-thumbs-wrap js-zoom-gallery">
                                    <a href="img/product-small1.png" class="small-thumb">
                                        <img src="img/product-small1.png" alt="product">
                                    </a>
                                    <a href="img/product-small2.png" class="small-thumb">
                                        <img src="img/product-small2.png" alt="product">
                                    </a>
                                </div> */}
            
                                <div> 
                                    {/* <img src={tokenInfo.image_url} width="500" height="550" alt= "loading"/> */}
                                    <video controls autostart autoPlay src={tokenInfo.animation_url} type="video/mp4" width="500" height="550"/>
                                </div>
                            </div>
                        </div>
                        <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="shop-product-detail-content">
                                <div class="main-content-wrap">
                                    <div class="block-title">
                                        <h4>{collectionInfo.name}</h4>
                                        <h2 class="title bold"> {tokenInfo.name} </h2>
                                    </div>
                                </div>
            
                                <p>{tokenInfo.description}</p>
                                
                                <div class="article-number">
                                    {traitoneInfo.trait_type + ": " + traitoneInfo.value + ": " + traitoneInfo.max_value}
                                </div>
                                <div class="article-number">
                                    {"Contract Address: " + contractaddress}
                                </div>
                                <div class="article-number">
                                    {"Token ID: " + tokenId}
                                </div>
                                <br></br>
                                <a href = {openSeaUrl} target="_blank" rel="noreferrer" class="btn btn-secondary btn-md-2">
                                    <div class="text">
                                        <span class="title"> Purchase Item</span>
                                    </div>
                                </a>
                                <Link to= "/collectionPage">
                                    <button class = "btn btn-secondary ml-5"> Back to Collection</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}
