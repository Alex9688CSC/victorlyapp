import React, {useState, useEffect} from 'react'
import Collection from './collection';
import axios from 'axios';


export default function Collectionlist() {
    const [collection, setCollection] = useState([])
    const collectionsURI= 'https://victorapi.herokuapp.com/api/collections';

    useEffect(() => {
        const init = async () => {
          const { data } = await axios.get(collectionsURI);
          setCollection(data);
        };
        init();
    },[collectionsURI]);
    
    
    //loop through the object to create the list
    const collectionlist = Object.keys(collection).map(key => {
            return <div>
                <br></br>
                <Collection PlayerName= {key}/>
            </div>
            
        }
    )


    return (
        <div class="container mt-5 ">
            <br></br>
            <div class="card">
                <div class="card-body">
                    <h1 class="text-center"> NFT Collections </h1>

                </div>
            </div>
            <br></br>
            <div class="container vertical-scrollable" style= {{height: "1200px", overflow: "scroll"}}>  
                {collectionlist}
                <br></br>
                <Collection PlayerName= {"playerone"}/>
                {/* <br></br>
                <div>
                    <Collection PlayerName= {"playerone"}/>
                </div>
                <br></br>
                <div >
                    <Collection PlayerName= {"playertwo"}/>
                </div>
                <br></br>
                <div>
                    <Collection PlayerName= {"playerone"}/>
                </div>
                <br></br>
                <div >
                    <Collection PlayerName= {"playertwo"}/>
                </div> */}
            </div>
            <br></br>
        </div>
    )
}
