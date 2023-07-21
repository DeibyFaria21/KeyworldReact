import React from 'react'
import logo from '../assets/Images/logo.png'

const Banner = () => {
  return (
    <div>
        <div className="banner">
            <div className="eslogan">
                Find your own Key!
            </div>
            <img className='logoImg' src={logo} alt="Logo"/>
        </div>
    </div>
  )
}

export default Banner