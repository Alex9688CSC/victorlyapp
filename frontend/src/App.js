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
      <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3">
          <h2 class="display-5">{"Tocken Name: "+ tokenInfo.name}</h2>
          <p class="lead">{"Tocken Discription: "+ tokenInfo.description}</p>
          <img src={tokenInfo.image} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default App;
