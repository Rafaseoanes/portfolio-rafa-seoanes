import React from 'react';
import "./Topbar.css"

const Navbar = () => {
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
               
          <button>Dark Mode</button>

            </div>
        </div>
    );
}

export default Navbar;
