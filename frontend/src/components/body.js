import React from 'react'
import Collectionlist from './Collectionlist';
import Cardlist from './Cardlist';
import Profile from './profile';
import {CollectionProvider} from  './CollectionContext';

export default function body() {
    return (
        // <CollectionProvider>
            <div class="container-fluid">
                <div class="row content">
                    <div class="col-sm-3 ">
                        <Collectionlist />
                    </div>
                    <div class="col-md-8">
                        <Profile />
                        <Cardlist />
                    </div>
                </div>
            </div>
        // </CollectionProvider>
    )
}
