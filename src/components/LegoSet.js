import React from 'react'
import LegoSetDetails from './LegoSetDetails'

const LegoSet = () => {
    return (
        <div class="card">
            <img src="img_avatar.png" alt="Lego Set" style="width:100%" />
            <div class="container">
                <h4><b>Name</b></h4>
                <button>Show Details</button>
                <LegoSetDetails />
                <button>Delete</button>
            </div>
        </div>
    )
}

export default LegoSet