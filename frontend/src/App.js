import React, { useState } from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Body from './components/body';

export const AppContext =React.createContext();


export default function App() {

    return (
        <div>
            <div class="row"> 
                <Nav />
            </div>
            <div class="row"> 
                <Body />
                <Footer />
            </div>


            

            
        </div>
    )
}
