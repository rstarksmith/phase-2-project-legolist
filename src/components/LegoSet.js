import React from 'react'
import LegoSetDetails from './LegoSetDetails'

const LegoSet = () => {
    return (
        <div class="card">
            <img src="img_avatar.png" alt="Avatar" style="width:100%" />
            <div class="container">
                <h4><b>Name of Set</b></h4>
                <button>Show Details</button>
                <LegoSetDetails />
                <button>Delete</button>
            </div>
        </div>
    )
}

export default LegoSet