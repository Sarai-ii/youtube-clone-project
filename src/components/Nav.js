import React from 'react';
import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
import "./Nav.css"

export default function Nav() {
    return (
        <div className='container fixed-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <label className='navbar-brand logo' href='#'>YouTube</label>
                <br/>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <Link className='homeLink nav-link' to="/">Home</Link>
                    </li>

                    <br/>
                    <Link className='aboutLink link' to="/about">About</Link>
                </ul>
            </nav>
        </div>
    );
}


/* ============== NOTES ==================
-> className fixed-top in the first div fixes this element to the top of the page. 
-> className container in the first div allows us to center all this if we want to later.
-> most of the classNames are from Bootstrap
-> all classNames containing "aria" are for accesssibility and are best practice. 
For more info: https://getbootstrap.com/docs/4.0/components/navbar/

Do we want a collapsable Navbar?  If so...
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


*/