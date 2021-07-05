import React from 'react'
import Collectionlist from './collectionlist';
import Cardlist from './cardlist';
import Profile from './profile';

export default function body() {
    return (
        <div class="container">
            <div class="col-8">
                <Collectionlist />
            </div>
            <div class="col-lg">
                <Profile />
            </div>
        </div>
    )
}
