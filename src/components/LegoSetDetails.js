import React from 'react'

const LegoSetDetails = ({ lego }) => {
    const { theme, pieces, built } = lego
    
    return (
        <div>
            <p><strong>Theme:</strong> {theme}</p>
            <p><strong>Pieces:</strong> {pieces}</p>
            <p>{built ? "Built " : "In Box"}</p>
        </div>
    )
}

export default LegoSetDetails