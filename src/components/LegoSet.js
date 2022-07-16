import React, { useState } from 'react'
import LegoSetDetails from './LegoSetDetails'

const LegoSet = ({ lego, handleSetDelete }) => {
    const { name, id, image } = lego
    const [showDetails, setShowDetails] = useState(false)

    const handleDetails = () => {
        setShowDetails(!showDetails)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3001/sets/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => handleSetDelete(id))
    }

    return (
        <div className="card">
            <div className='image-container'>
                <img className="card-img" src={image} alt="Lego Set" /> 
            </div>    
            <div className="container">
                <h2 className='set-name'>{name}</h2><br/>
                {showDetails ? <LegoSetDetails lego={lego}/> : null}<br/>
                <button className='details-bttn' onClick={handleDetails} >＋ Details</button>
                <button className='trash-bttn' onClick={handleDelete}>X Delete</button>
            </div>
        </div>
    )
}

export default LegoSet
