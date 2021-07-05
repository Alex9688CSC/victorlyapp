import React from 'react'

export default function Nav() {
    return (

        <header class="header header--logout" id="site-header">
            <a href="02-ProfilePage.html" class="logo">
                <div class="img-wrap">
                    {/* <img src="img/logo.png" alt="Olympus"> */}
                </div>
            </a>

            <div class="header-content-wrapper">

                <div class="form--login-logout">
                    <form class="form-inline">
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
