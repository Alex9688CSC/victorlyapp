import React, { useState, useContext } from 'react';

const CollectionContext = React.createContext()
const CollectionUpdateContext = React.createContext();


//create hook for easy access to the two value
export function useConllection(){
    return useContext(CollectionContext);
}

export function useCollectionUpdate(){
    return useContext(CollectionUpdateContext);
}


export function CollectionProvider({childern}) {
    //create state 
    const [selectedCol, setselectedCol] = useState();
    

    //update state
    function updateCollection (collectionName){
        setselectedCol(collectionName);
    }

    return (
        <CollectionContext.Provider value= {selectedCol}>
            <CollectionUpdateContext.Provider value= {updateCollection}>
            {childern}
            </CollectionUpdateContext.Provider>
        </CollectionContext.Provider>
    )
}
