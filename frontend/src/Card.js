// import React, { useState, useEffect } from 'react';
// import getBlockchain from './ethereum.js';
// import axios from 'axios';

// function Card({tokenId}) {
//   const [tokenInfo, setTokenInfo] = useState(undefined);
//   const  tokenID  = tokenId;

//   useEffect(() => {
//     const init = async () => {
      
//       const { nft } = await getBlockchain();
//       const tokenURI = await nft.tokenURI(tokenID);
//       console.log(tokenURI);
//       const { data } = await axios.get(tokenURI);
//       setTokenInfo(data);
//     };
//     init();
//   }, [tokenID]);

//   if(typeof tokenInfo === 'undefined') {
//     return 'token 0 undefined';
//   }

//   return (
    
//     <div class="col-md">
//       <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
//         <div class="my-3 p-3">
//           <h2 class="display-5">{"Tocken Name: "+ tokenInfo.name}</h2>
//           <p class="lead">{"Tocken Discription: "+ tokenInfo.description}</p>
//           <p class="lead">{"Birthday: "+ tokenInfo.birthday}</p>
//           <img src={tokenInfo.image} className="img-fluid" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
