import React from 'react'
import banner from './../../images/VictorlyLogo1.png'; 
import profile from'./../../images/victorlyLogo.png'; 

export default function homeProfile() {
    return (
        
        <div class="container mt-5">
            <div class="container mt-5">
                <br></br>
                <br></br>
            </div>
            <div class="row">
                <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="ui-block">
                        <div class="top-header">
                            <div class="top-header-thumb">
                                <img src={banner} alt= "loading" />
                                {/* <img src="img/top-header1.jpg" alt="nature"> */}
                            </div>
                            <div class="profile-section">
                                <div class="row">
                                    <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                                        <ul class="profile-menu">
                                            <li>
                                                <a href="02-ProfilePage.html" class="active">Timeline</a>
                                            </li>
                                            <li>
                                                <a href="05-ProfilePage-About.html">About</a>
                                            </li>
                                            <li>
                                                <a href="06-ProfilePage.html">Friends</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                        <ul class="profile-menu">
                                            <li>
                                                <a href="07-ProfilePage-Photos.html">Photos</a>
                                            </li>
                                            <li>
                                                <a href="09-ProfilePage-Videos.html">Videos</a>
                                            </li>
                                            <li>
                                                <div class="more">
                                                    {/* <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg> */}
                                                    <ul class="more-dropdown more-with-triangle">
                                                        <li>
                                                            <a href="#">Report Profile</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Block Profile</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="control-block-button">
                                    <a href="35-YourAccount-FriendsRequests.html" class="btn btn-control bg-blue">
                                        {/* <svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg> */}
                                    </a>

                                    <a href="#" class="btn btn-control bg-purple">
                                        {/* <svg class="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg> */}
                                    </a>

                                    <div class="btn btn-control bg-primary more">
                                        {/* <svg class="olymp-settings-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg> */}

                                        <ul class="more-dropdown more-with-triangle triangle-bottom-right">
                                            <li>
                                                <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Profile Photo</a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Header Photo</a>
                                            </li>
                                            <li>
                                                <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="top-header-author">
                                <a href="02-ProfilePage.html" class="author-thumb">
                                    {/* <img src="img/author-main1.jpg" alt="author"> */}
                                    <img src={profile} style= {{width: "120px"}} alt= "loading"/>
                                </a>
                                <div class="author-content">
                                    <a href="02-ProfilePage.html" class="h4 author-name">Victor.ly</a>
                                    <div class="country">NFT Collections</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="container"> */}
            <div>
                <div class="row">
                    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="ui-block responsive-flex">
                            <div class="ui-block-title">
                                <div class="h6 title">James???s Blog Posts</div>
                                <div class="w-select">
                                    <div class="title">Order By:</div>
                                    <fieldset class="form-group">
                                        <select class="selectpicker form-control">
                                            <option value="DA">Date (Descending)</option>
                                            <option value="NU">Number of Likes</option>
                                            <option value="NU">Number of Shared</option>
                                        </select>
                                    </fieldset>
                                </div>
                                {/* <form class="w-search">
                                    <div class="form-group with-button">
                                        <input class="form-control" type="text" placeholder="Search Blog Posts...">
                                        <button>
                                            <svg class="olymp-magnifying-glass-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                                        </button>
                                    </div>
                                </form>
                                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
