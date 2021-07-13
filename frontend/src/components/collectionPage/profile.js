// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { PlayerContext } from '../PlayerContext';

// export default function Profile() {
//     const [collectionInfo, setCollectionInfo] = useState(undefined);
    
//     const {player, setPlayer} = useContext(PlayerContext);
//     const  PlayerNAME  = player;

//     const collectionURI = 'https://victorapi.herokuapp.com/api/collections/'+ PlayerNAME ;
    
//     //const collection = useContext(PlayerContext);


//     useEffect(() => {
//         const init = async () => {
//           const { data } = await axios.get(collectionURI);
//           setCollectionInfo(data);
//         };
//         init();
//       },[collectionURI]);
//       if(typeof collectionInfo === 'undefined') {
//         return 'collectionInfo undefined';
//       }

//     return (
//         <div class="container mt-5">
//             <div class="jumbotron jumbotron-fluid">
//                 <div class="container">
//                     <img src={collectionInfo.bannerimg} alt="loading" className="img-fluid"/>
//                     <h1 class="display-4">{collectionInfo.collection_name}</h1>
//                     <p class="lead">{collectionInfo.description}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
