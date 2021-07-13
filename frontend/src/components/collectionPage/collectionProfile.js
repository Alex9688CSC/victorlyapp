import React from 'react'
import thumb1 from './../../images/VictorlyLogo1.png'; 
import author from'./../../images/victorlyLogo.png'; 

export default function collectionProfile() {
    return (
        <article class="hentry blog-post single-post single-post-v3">
            <a href="#" class="post-category bg-primary">OLYMPUS NEWS</a>
        
            <h1 class="post-title">We optimized the Olympus App for better navigation</h1>
        
            <div class="author-date">
                <div class="author-thumb">
                    <img src={author}  style= {{width: "50px"}} class="avatar" alt= "loading author"/>
                    {/* <img alt="author" src="img/friend-harmonic7.jpg" class="avatar"> */}
                </div>
                by
                <a class="h6 post__author-name fn" href="#">JACK SCORPIO</a>
                <div class="post__date">
                    <time class="published" datetime="2017-03-24T18:18">
                        -  12 hours ago
                    </time>
                </div>
            </div>
        
            <div class="post-thumb">
                {/* <img src="img/post-thumb1.jpg" alt="author"> */}
                <img src={thumb1} alt= "loading player"/>
            </div>
        
            <div class="post-content-wrap">
        
                <div class="control-block-button post-control-button">
        
                    <a href="#" class="post-add-icon inline-items">
                        {/* <svg class="olymp-speech-balloon-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg> */}
                        <span>105</span>
                    </a>
        
                    <a href="#" class="btn btn-control has-i bg-facebook">
                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
        
                    <a href="#" class="btn btn-control has-i bg-twitter">
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
        
                <div class="post-content">
                    <h5>Lorem ipsum dolor sit amet, consectadipisicing elit, sed do eiusmod por incidid ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud lorem exercitation ullamco laboris.
                    </h5>
        
                    <p>Duis en aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi hitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
        
                    <h3>Check the UX Video</h3>
        
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt:
                    </p>
        
                    <div class="video-thumb bg-violet">
                        {/* <img src="img/video-thumb.png" alt="video"> */}
                        <img src={author} style= {{width: "50px"}} alt= "loading video"/>
                        <a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
                            {/* <svg class="olymp-play-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use></svg> */}
                        </a>
                        <div class="overlay overlay-dark"></div>
                    </div>
        
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam.
                    </p>
        
                    <p>Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud tation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia unt mollit anim id est laborum aperiam,
                        eaque ipsa quae ab illo inventore veritatis  quasi architecto.
                    </p>
                </div>
            </div>
			</article>
    )
}
