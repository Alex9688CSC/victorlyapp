import React from 'react'
import logo from './../images/VictorlyLogo1.png'; // with import
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <header class="header header--logout" id="site-header">
            <div class="ml-5"> 
            <a href="https://www.victor.ly/">
                <img src={logo} style= {{width: "120px"}} alt= "loading" />
            </a>
            </div>
                
            <div class="header-content-wrapper">

                <div class="form--login-logout">
                    <form class="form-inline">
                        <Link to= "/">
                            <button class="btn btn-outline-success text-white">NFT HomePage</button>
                        </Link>
                        <a href="https://www.victor.ly/events" class= "btn btn-outline-success text-white">賽事</a>
                        <a href="https://www.victor.ly/users" class= "btn btn-outline-success text-white">選手</a>
                        <a href="https://www.victor.ly/user/sign_in" class= "btn btn-outline-success text-white">登入</a>
                        
                    </form>
                    {/* <a href="#" class="btn btn-primary btn-md-2 login-btn-responsive" data-toggle="modal" data-target="#registration-login-form-popup">Login</a> */}
                </div>
            </div>
        </header>

    )
}
