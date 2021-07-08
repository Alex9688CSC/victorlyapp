import React from 'react'
import logo from './../images/victorlyLogo.png'; // with import

export default function Footer() {
    return (
        <div class="footer footer-full-width" id="footer">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="widget w-about">
                            <a href="02-ProfilePage.html" class="logo">
                                <div class="img-wrap">
                                    <img src={logo} alt= "loading" style= {{width: "100px"}}/>
                                </div>
                                <div class="title-block">
                                    <h6 class="logo-title"> VICTOR.LY</h6>
                                    <div class="sub-title">ATHELETE NETWORK</div>
                                </div>
                            </a>
                            <p>你儘管在競技場上馳騁，我們在場下為你披荊斬棘 
                                聯絡我們加入我們的行列！</p>
                            <ul class="socials">
                                <li>
                                    <a href="#">
                                        <i class="fab fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-youtube" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col col-lg-2 col-md-4 col-sm-12 col-12">

                    </div> */}
                    {/* <div class="col col-lg-2 col-md-4 col-sm-12 col-12">
                        
                    </div> */}
                    {/* column one */}
                    <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                        <div class="widget w-list">
                            <h6 class="title">聯絡資訊</h6>
                            <ul>
                                <li>
                                    <p>台灣：(04) 3700-1268</p>
                                </li>
                                <li>
                                    <p>美國：+1 404-538-5305</p>
                                </li>
                                <li>
                                    <p>support@victor.ly</p>
                                </li>
                                <li>
                                    <p>台灣 台中市大隆路20號 7F-3</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* column two */}
                    <div class="col col-lg-3 col-md-3 col-sm-12 col-12">
                        <div class="widget w-list">
                            <h6 class="title">關於母公司</h6>
                            <ul>
                                <li>
                                    <p>西北國際運動行銷有限公司</p>
                                </li>
                                <li>
                                    <p>統一編號 82931241</p>
                                </li>
                                <li>
                                    <p>西北海外遊學</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*  bottom footer */}
                    <div class="col col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="sub-footer-copyright">
                            <span>
                                ©2020 Victor.ly
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
