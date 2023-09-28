import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import arrow from '../../images/icon-arrow-light.svg';
import arrowDark from '../../images/icon-arrow-dark.svg';
import burgerIcon from '../../images/icon-hamburger.svg';
import closeIcon from '../../images/icon-close.svg'

const Header = () => {
    const [connectState, setConnectState] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [innerWidth, setInnerWidth] = useState();

    function toggleConnectMenu() {
        setConnectState(!connectState);
    }
    function toggleMobileMenu() {
        setMobileMenu(!mobileMenu);
    }
    useEffect(() => {
        window.onresize = function () {
            setInnerWidth(document.documentElement.scrollWidth);
        }
    });

    return (
        <header>
            <div className='logoAndLinks'>
                <img src={logo} alt='logo' />
                <ul className='links'>
                    <li>Product <img src={arrow} alt='arrow' /></li>
                    <li>Company <img src={arrow} alt='arrow' /></li>
                    <li className='connect-btn' onClick={toggleConnectMenu}>Connect <img src={arrow} alt='arrow' style={{ transform: `${connectState ? "rotate(180deg)" : ""}` }} />
                        <ul className='connect-links' style={{ display: `${connectState ? "block" : "none"}` }}>
                            <li>Contact</li>
                            <li>NewsLetter</li>
                            <li>Linkedin</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='btns'>
                <button className='login'>Login</button>
                <button className='sign-up'>Sign Up</button>
            </div> 
            <div className='burger' style={{ display: `${innerWidth >= 800 ? "block" : "none"}` }}>
                <img src={mobileMenu ? closeIcon : burgerIcon } alt='hamburger' onClick={toggleMobileMenu} />
                <div className='mobile-menu' style={{ display: `${mobileMenu ? "flex" : "none"}` }}>
                    <ul className='links'>
                        <li>Product <img src={arrowDark} alt='arrow' /></li>
                        <li>Company <img src={arrowDark} alt='arrow' /></li>
                        <li className='connect-btn' onClick={toggleConnectMenu}>Connect <img src={arrowDark} alt='arrow' style={{ transform: `${connectState ? "rotate(180deg)" : ""}` }} />
                            <ul className='connect-links' style={{ display: `${connectState ? "block" : "none"}` }}>
                                <li>Contact</li>
                                <li>NewsLetter</li>
                                <li>Linkedin</li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <div className='btns'>
                        <button className='login'>Login</button>
                        <button className='sign-up'>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
