import React from 'react'
import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='logos' />
                </div>
                <div>
                    <h4>Product</h4>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h4>Connect</h4>
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
