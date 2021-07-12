import React from 'react'
import logo from './../images/VictorlyLogo1.png'; // with import
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <header class="header header--logout" id="site-header">
            <div class="ml-5"> 
                <img src={logo} style= {{width: "120px"}} alt= "loading" />
            </div>
                
            <div class="header-content-wrapper">

                <div class="form--login-logout">
                    <form class="form-inline">
                        <Link to= "/">
                            <button class="btn btn-primary btn-md-2">NFT HomePage</button>
                        </Link>
                        <button class="btn btn-primary btn-md-2">賽事</button>
                        <button class="btn btn-primary btn-md-2">選手</button>
                        <button class="btn btn-primary btn-md-2">登入</button>
                    </form>
                    <a href="#" class="btn btn-primary btn-md-2 login-btn-responsive" data-toggle="modal" data-target="#registration-login-form-popup">Login</a>
                </div>
            </div>
        </header>

    )
}
