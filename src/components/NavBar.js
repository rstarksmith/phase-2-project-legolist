import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({ reRenderSet }) => {

    const handleReRender = (e) => {
        e.preventDefault()
        
    }

    return (
        <nav className="navbar" >
            <img src='https://i.imgur.com/x1yEvhv.png?1' title="source: imgur.com" className="logo"/>
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

