import React from 'react';
import "./Hero.css"

const Hero = () => {
    return (
        <div className='intro' >
            <div className='heroLeft' >
            <h2>Hi there, Im Rafa A <span id='title'>Frontend Developer</span>
            </h2>
            <br/>
            <h4>Welcome to my portfolio! If you'd like to learn more about me and my work, 
            please keep scrolling!</h4>
            <br/>
            <button id='emailBtn'>Email me</button>
            </div>


            <div className='heroRight' >
            <img id='standingMan' src="https://i.ibb.co/tPvMjp7/business-3d-black-man-in-glasses-standing-and-typing-on-a-phone.png"
             alt="business-3d-black-man-in-glasses-standing-and-typing-on-a-phone" />

<img className='animatedImg' src="https://i.ibb.co/zJJgMx7/casual-life-3d-white-envelope-with-blue-letter-inside.png" 
alt="casual-life-3d-white-envelope-with-blue-letter-inside" />
<img className='animatedImg' src="https://i.ibb.co/2d54xpr/business-3d-browser-window-with-open-web-page.png"
 alt="business-3d-browser-window-with-open-web-page" />
 <img className='animatedImg' src="https://i.ibb.co/P1TbGvr/casual-life-3d-smartphone-notifications-stacked-on-top-of-each-other.png" 
 alt="casual-life-3d-smartphone-notifications-stacked-on-top-of-each-other" />
            </div>

            
        </div>
    );
}

export default Hero;
