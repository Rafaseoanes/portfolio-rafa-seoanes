import React, { useEffect, useState } from 'react';
import "./Topbar.css"

const Navbar = () => {

const [isDarkMode, setDarkMode] = useState(true)

const changeMode = () => {
    setDarkMode(!isDarkMode)
}

useEffect(() => {
    if(isDarkMode) {
        document.documentElement.style.setProperty('--backGround', '#0F172A')
    } else {
        document.documentElement.style.setProperty('--backGround', '#F8FAFF')
    }
}, [isDarkMode])


    return (
        <div className='wrapper'>
            <div className='left'> {/* logo */}
                 <p>&#60;&#47;&#62;</p>
            </div>
            <div className='center'>
                <div className='menu'>
                        <ul>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                </div>
                
            </div>
            <div className='right'>
            <label className="switch" >
                <input type="checkbox"></input>
                <span className="slider" onClick={changeMode} ></span>
            </label>
          

            </div>
        </div>
    );
}

export default Navbar;
