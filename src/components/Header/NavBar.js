import { Link } from "react-router-dom";
import "./NavBar.css";
import YouTubeLogoSplash from "../../assets/youtube-logo-png-2077.png"
 
// import { NavBar} from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-custom">
            
            <Link className="navbar-brand logo" to="/">
              <img src={YouTubeLogoSplash} alt="YouTube logo" className="d-inline-block align-middle mr-2 youtube-logo" />
            </Link>
            
            <br />

            
            
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
          </svg>
            <div className="ml-auto nav-links">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">    
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg> */}
              <Link className="aboutLink link" to="/about">
                About
              </Link>

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

              <Link className="homeLink nav-link" to="/">
                Home
              </Link>

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