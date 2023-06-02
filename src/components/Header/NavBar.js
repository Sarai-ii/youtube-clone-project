import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <label className='navbar'>YouTube</label>
                <Link className='homeLink' to="/">Home</Link>
                <Link className='aboutLink' to="/about">About</Link>
            </nav>
        </div>
    );
}
