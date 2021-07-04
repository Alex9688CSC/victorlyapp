import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import axios from 'axios';

function App() {
  const [tokenInfo, setTokenInfo] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      const tokenURI = await nft.tokenURI(0);
      console.log(tokenURI);
      const { data } = await axios.get(tokenURI);
      setTokenInfo(data);
    };
    init();
  }, []);

  if(typeof tokenInfo === 'undefined') {
    return 'token 0 undefined';
  }

  return (
    <div className='container'>

      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='text-center'>{"Players NFT"}</h1>
          <div className="jumbotron">
            <p className="lead text-center">{"Tocken Name: "+ tokenInfo.name}</p>
            <p className="lead text-center">{"Tocken Discription: "+ tokenInfo.description}</p>
            <img src={tokenInfo.image} className="img-fluid" />
          </div>
          <div className="jumbotron">
            <p className="lead text-center">{"Tocken Name: "+ tokenInfo.name}</p>
            <p className="lead text-center">{"Tocken Discription: "+ tokenInfo.description}</p>
            <img src={tokenInfo.image} className="img-fluid" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
