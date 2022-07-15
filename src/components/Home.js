import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = ({ reRenderSet }) => {
    const history = useHistory()

    const navigateToList = () => {
        reRenderSet()
        history.push('/sets')
    }

    return (
        <div className='home-container'>
            <img className='home-logo' src='https://i.imgur.com/CqT6Nrm.png?1' alt='Lego List title graphic' /><br/>
            <h3 className='home-description' >Keep track of your LEGO collection with LEGO List</h3><br/>
            <button className='home-button' onClick={navigateToList}>View List</button>
        </div>
    )
}

export default Home

