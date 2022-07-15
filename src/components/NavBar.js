import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({ reRenderSet }) => {

    const handleReRender = (e) => {
        e.preventDefault()
        
    }

    return (
        <nav className="navbar" >
            <div className="logo">LEGO List</div>
                <ul className="nav-links">
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link onClick={(e) => handleReRender} to="/sets">List</Link>
                        <Link to="/sets/new">Add Set</Link>
                    </div>
                </ul>
        </nav>
    )
}
export default NavBar