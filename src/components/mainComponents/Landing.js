import React from 'react'
import Header from "../customComponents/Header"

const Landing = () => {
    return (
        <div className='landing'>
            <Header />
            <div className='landing-info'>
                <h1>A modern publishing platform</h1>
                <p>
                    Grow Your audience and build your online brand
                </p>
                <div className='btns'>
                    <button>Start for Free</button>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Landing
