import React from 'react';
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
const Header = () => {

    return (
        <div>
            <section className="row1 bg-lg mb-2">
                <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                    <div className="container-fluid">
                        <NavLink to="/" className='navbar-brand' ><h4 style={{ alignItems: "center", display: "flex" }} className='me-1'><img className='me-2' src="/logo192.png" alt="Logo" width={30} height={30} />Navbar</h4></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="{classes.left_navlinks} navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item me-5">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item me-5">
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item me-5">
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Header
