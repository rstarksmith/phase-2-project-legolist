import React, { useState } from 'react'
import LegoSetDetails from './LegoSetDetails'

const LegoSet = ({ lego }) => {
    const [showDetails, setShowDetails] = useState(false)

    const handleDetails = () => {
        setShowDetails(!showDetails)
    }
    return (
        <div className="card">
            <img className="card-img" src={lego.image} alt="Lego Set" /> 
            <div className="container">
                <h3>{lego.name}</h3>
                {showDetails ? <LegoSetDetails lego={lego}/> : null}
                <button onClick={handleDetails} >＋ More Details</button>
                <button>🗑 Delete</button>
            </div>
        </div>
    )
}

export default LegoSet

//style="width:100%