import React from 'react';
import "./Hero.css"

const Hero = () => {

    const mystyle = {
        height: "65px",
        width: "65px"
      };
    return (
        <div className='intro' >
            <div className='heroLeft' >
                    <h2>Hi there, Im Rafa A <span id='title'>Frontend Developer</span></h2>
                    
                    <h4>Welcome to my portfolio! If you'd like to learn more about me and my work, 
                    please keep scrolling!</h4>

                    
                    <button id='emailBtn'>Email me</button>
                <div className='icons'>
                <a href={"https://github.com/Rafaseoanes"} target="blank" ><img src="https://i.ibb.co/4ZMXVDW/icons8-github-64.png" 
                    alt="icons8-github-64" border="0" style={mystyle} ></img></a>
                    
                    <a href={"https://www.instagram.com/rafase0anes/"} target="blank" ><img src="https://i.ibb.co/gzL7XXK/icons8-instagram-48.png" 
                    alt="icons8-instagram-48" border="0" style={mystyle}  ></img></a>

                    <a href={"https://www.linkedin.com/in/rafael-seoanes/"} target="blank" ><img src="https://i.ibb.co/RDmXq7P/icons8-linkedin-60.png" 
                    alt="icons8-linkedin-60" border="0" style={mystyle}  ></img></a>

                    
                </div>
            </div>


            <div className='heroRight' >
                    <img id='standingMan' src="https://i.ibb.co/tPvMjp7/business-3d-black-man-in-glasses-standing-and-typing-on-a-phone.png"
                    alt="business-3d-black-man-in-glasses-standing-and-typing-on-a-phone" />
                       {/* icons */}
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
