import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { PlayerContext } from '../PlayerContext';
import getContract from '../../getContract';
import seaport from '../../openSea';

export default function Itempage() {
    const [cardInfo, setCardInfo] 
    = useState({name: "loading name", image: "loading image", description: "description"});
    const [contractaddress, setContractaddress] = useState("0xe757889e8080C119a522f4627d2c151CC3dE9024");
    const {player, tokenId} = useContext(PlayerContext);

    const tokenID= tokenId; 
    const openSeaUrl= "https://testnets.opensea.io/assets/"+ contractaddress + "/" + tokenId
    
    const [balance, setBalance] = useState();
    const accountAddress= "0x652534BE050D9447FbE6B074348bA5652a0bb076";

    useEffect(() => {
        const init = async () => {
          const { playernft } = await getContract(player);
          const tokenURI = await playernft.tokenURI(tokenID);
          const { data } = await axios.get(tokenURI);
          setCardInfo(data);
          const addr= await playernft.resolvedAddress;
          setContractaddress(addr);

          console.log(contractaddress);
          const asset= {"tokenAddress": contractaddress, "tokenId": tokenId};
          const balancedata = await seaport.getAssetBalance({
            accountAddress, // string
            asset, // Asset
        })
        
        setBalance(balancedata);
        console.log(balance);
        const ownsKitty = balance.greaterThan(0)
        console.log(ownsKitty);

        };
        init();
      },[player,tokenID,contractaddress,tokenId]);

      

    // const asset = {
    // tokenAddress: address, // CryptoKitties
    // tokenId: tokenId, // Token ID
    // }

    
    // useEffect(() => {
    //     const init = async () => {
    //         console.log("beofre balance data");
    //         console.log(asset);
    //         const balancedata = await seaport.getAssetBalance({
    //             accountAddress, // string
    //             asset, // Asset
    //         })
    //         console.log(balancedata);
    //         setBalance(balancedata);
    //     };
    //     init();
    //   },[asset]);

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
            
                                <div class="shop-product-detail-thumb">
                                    {/* <img class="main-img" alt="product" src="img/product3.png"> */}
                                    <img src={cardInfo.image} className="img-fluid" alt= "loading"/>
                                </div>
                            </div>
                        </div>
                        <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="shop-product-detail-content">
                                <div class="main-content-wrap">
                                    <div class="block-title">
                                        <h4>{player}</h4>
                                        <h2 class="title bold"> {cardInfo.name} </h2>
                                        {/* <ul class="rait-stars">
                                            <li>
                                                <i class="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                                            </li>
            
                                            <li>
                                                <i class="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                                <i class="fa fa-star star-icon c-primary" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                                <i class="far fa-star star-icon" aria-hidden="true"></i>
                                            </li>
                                        </ul> */}
                                    </div>
            
                                    {/* <div class="block-price">
                                        <div class="product-price">$20</div>
                                    </div> */}
                                </div>
            
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor labore eter
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  voluptate velit
                                    esse cillum dolore. 
                                </p>
                                <p>{cardInfo.description}</p>
                                
                                <div class="article-number">
                                    {"Contract Address: " + contractaddress}
                                </div>
                                <div class="article-number">
                                    {"Token ID: " + tokenId}
                                </div>
                                <br></br>
                                <a href = {openSeaUrl} target="_blank" rel="noreferrer" class="btn btn-secondary btn-md-2">
                                    {/* <svg class="olymp-shopping-bag-icon icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-shopping-bag-icon"></use></svg> */}
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
