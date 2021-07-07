import React from 'react'
import Collection from './Collection';
export default function Collectionlist() {
    return (
        <div class="container mt-5 ">
            <br></br>
            <div class="card border">
                <div class="card-body">
                    <h1 class="text-center"> NFT Collections </h1>

                </div>
            </div>
            <br></br>
            <div class="container vertical-scrollable" style= {{height: "1200px", overflow: "scroll"}}>  
                <br></br>
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
                </div>
            </div>
        </div>

        // <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "380px"}}>
        //     <div class="list-group list-group-flush border-bottom scrollarea">
        //     card one
        //     <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
        //         <div class="d-flex w-100 align-items-center justify-content-between">
        //         <strong class="mb-1">List group item heading</strong>
        //         <small>Wed</small>
        //         </div>
        //         <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        //     </a>
        //     card two
        //     <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
        //         <div class="d-flex w-100 align-items-center justify-content-between">
        //         <strong class="mb-1">List group item heading</strong>
        //         <small class="text-muted">Tues</small>
        //         </div>
        //         <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        //     </a>
        
        //     </div>
        // </div>







        
    )
}
