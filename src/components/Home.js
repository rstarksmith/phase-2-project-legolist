import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    const navigateToList = () => {
        history.push('/sets')
    }

    return (
        <div>
            <img className='home-logo' src='https://c4.wallpaperflare.com/wallpaper/536/402/410/awesome-black-lego-logo-alternate-entertainment-other-hd-art-wallpaper-preview.jpg' alt='Lego List title graphic' /><br/>
            <h3 className='home-description' >Keep track of your LEGO collection with LEGO List</h3>
            <button className='home-button' onClick={navigateToList}>View List</button>
        </div>
    )
}

export default Home