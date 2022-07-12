import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = ({ handlePageClick }) => {
    return (
        <nav className="navbar" onClick={(e) => console.log('click')}>
            <div className="logo">LEGO List</div>
                <ul className="nav-links">
                    <div className="menu">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/sets">List</NavLink>
                        <NavLink to="/sets/new">Add Set</NavLink>
                    </div>
                </ul>
        </nav>
    )
}
export default NavBar