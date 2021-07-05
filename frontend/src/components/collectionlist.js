import React from 'react'
import Collection from './Collection';
export default function Collectionlist() {
    return (
            <div class="container vertical-scrollable">  
                <br></br>
                <div>
                    <Collection PlayerName= {"playerone"}/>
                </div>
                <br></br>
                <div >
                    <Collection PlayerName= {"playertwo"}/>
                </div>
                <br></br>
                
            </div>
        
        
    )
}
