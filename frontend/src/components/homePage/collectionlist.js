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
        
        <div class="container">
            <div class="row">
                <div class="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    {/* <div class="ui-block"> */}
                        {collectionlist}
                        <br></br>
                    {/* </div> */}
                </div>
            </div>
            
        </div>

        // <div class="container">
        //     <br></br>
        //     <div class="container vertical-scrollable" style= {{height: "1200px", overflow: "scroll"}}>  
        //         {collectionlist}
        //         <br></br>
        //         <Collection PlayerName= {"playerone"}/>
        //     </div>
        //     <br></br>
        // </div>
    )
}
