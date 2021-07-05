import React from 'react'
import Collection from './Collection';
export default function collectionlist() {
    return (
            <div class="container vertical-scrollable">  
                <br></br>
                <div class="col-6">
                    <Collection PlayerName= {"playerone"}/>
                </div>
                <br></br>
                <div class="col-6">
                    <Collection PlayerName= {"playertwo"}/>
                </div>
                <br></br>
                
            </div>
        
        
    )
}
