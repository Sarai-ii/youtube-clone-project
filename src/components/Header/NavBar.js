import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
//import "../Nav.css"
import "./NavBar.css"
import SearchBar from "./SearchBar.js"

export default function NavBar() {
    return (
    <>
        <header>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-custom">
                    {/* <div className='YouTube'></div>   */}
                        <label className='navbar-brand logo' href='#'>YouTube</label>
                    <SearchBar />
                    <div className="ml-auto nav-links">
                            <Link className='homeLink nav-link' to="/">Home</Link>
                            <Link className='aboutLink link' to="/about">About</Link>
                    </div>
                </nav>            
        </div>
        </header>
        </>
    );
}


/* ============== NOTES ==================
"role" added in ul tag for accessibility related problems on Safari with lists with no bullet points.

-> className fixed-top in the first div fixes this element to the top of the page. 
-> className container in the first div allows us to center all this if we want to later.
-> most of the classNames are from Bootstrap
-> all classNames containing "aria" are for accesssibility and are best practice. 
For more info: https://getbootstrap.com/docs/4.0/components/navbar/

Do we want a collapsable Navbar?  If so...
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

=================== TAKING AWAY =============

       <nav class="nav">
    <ul>
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
        </li>
    </ul>
    </nav>
    <nav class="nav">
  <a className="nav-link active" aria-current="page" href="/">Second</a>
  <a className="nav-link" href="/">Link</a>
  <a className="nav-link" href="/">Link</a>
  
</nav>

====================

            <nav className="navbar">             
                <ul className='navbar-nav nav nav-pills nav-fill justify-content-end'>
                    <li className='navbar-brand logo'>
                        <label className='navbar-brand logo' href='#'>YouTube</label>
                    </li>
                    <li className='nav-item link'>
                        <Link className='homeLink nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item link'>
                        <Link className='aboutLink link' to="/about">About</Link>
                    </li>
                </ul>
            </nav>

 =================           ================
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <label className='navbar-brand logo' href='#'>YouTube</label>
                <br/>
                <ul className='navbar-nav nav justify-content-end'>
                    <li className='nav-item link'>
                        <Link className='homeLink nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item link'>
                        <Link className='aboutLink link' to="/about">About</Link>
                    </li>
                </ul>
            </nav>

*/