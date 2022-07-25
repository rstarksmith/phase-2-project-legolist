import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='home-container'>
            <img 
                className='home-logo' 
                src='https://i.imgur.com/CqT6Nrm.png?1' 
                alt='Lego List title graphic' 
            />
            <br/>
            <h3 className='home-about'>Keep track of your LEGO collection with LEGO List</h3><br/>
            <Link className='home-bttn' to='/sets'>View List</Link>
        </div>
    )
}

export default Home

