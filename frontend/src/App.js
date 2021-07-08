import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Body from './components/Body';

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
