import React from 'react'
import phones from '../../images/illustration-phones.svg'

const State = () => {
    return (
        <div className='state'>
            <div className='left-side'>
                <img src={phones} alt='blogr' />
            </div>
            <div className='right-side'>
                <h2>
                    State of the Art Infrastructure
                </h2>
                <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </div>
        </div>
    )
}

export default State
