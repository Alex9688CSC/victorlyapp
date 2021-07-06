import React from 'react'
import NFTcard from './NFTcard';
export default function Cardlist() {
    return (
        <div class="container mx-auto mt-4">
            <div class="row">
                <NFTcard PlayerName= {"playerone"} TokenId= {"0"}/>
                <NFTcard PlayerName= {"playerone"} TokenId= {"1"}/>
                <NFTcard PlayerName= {"playerone"} TokenId= {"0"}/>
                <NFTcard PlayerName= {"playerone"} TokenId= {"1"}/>
            </div>
        </div>
    )
}
