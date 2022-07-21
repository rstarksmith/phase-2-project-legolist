import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({ reRenderSet }) => {

    return (
        <nav className="navbar" >
            <img src='https://i.imgur.com/tLdkxvn.png?1' alt='lego list logo' className="logo"/>
                <ul className="nav-links">
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/sets" onClick={reRenderSet}>List</Link>
                        <Link to="/sets/new">Add Set</Link>
                    </div>
                </ul>
        </nav>
    )
}
export default NavBar

