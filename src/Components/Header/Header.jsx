import React from 'react';
import logo from "../../Icons/logo.png";

const Header = () => {
    return (
        <div className='Header'>
            <nav className="grey darken-4">
                <div className="nav-wrapper ">
                    <a href="/">
                        <div className="brand-logo ">
                            <img src={logo} alt="logo" className='Header-logo' />
                        </div>
                        <div className="brand-logo brand-logo-text ">
                            <b>Game Shop</b>
                        </div>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/Vahe-3" target="_blank" rel="noreferrer">
                                <b>My GitHub</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Header;

                        


                    
