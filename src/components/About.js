import "./About.css";
import React from 'react'

function About() {
  return (
    <>


<div className="container-fluid p-5">
  <div>
  <h4 className="display-6">About This Project</h4>
  <p>
    This YouTube Clone was made using React, Javascript, HTML, CSS, BootStrap, and YouTube Data API v3.
  </p>
  <p>
    This application is being created as part of the requirments for the Pursuit fellowship, class 9.6. The fellowship is a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate. Project-based curriculum provides hands-on experience with JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data Structures, Algorithms, sprints, Agile, code reviews, and pair programming.
  </p>
</div>
<div className="">
  <h4 className="display-6">About Us</h4>
  <a href="https://github.com/Sarai-ii" className="developer">Sarai Thomas </a>

  <p>Sarai Thomas is a software engineer and digital designer; she is also the lead on this project. Sarai has combined her background in business with her creativity skills to become the CEO and creative director of GLD RZÉ, a new luxery jewelry line.</p>
  <br/>
  <a href="https://github.com/JenniferEinstein" className="developer">Jennifer Einstein </a>
  <p>Hailing from the Golden State, Jennifer Einstein moved to New York City over 20 years ago and never looked back. She aims to make the modern world a better place, one line of code at a time. </p>
  <br/>
  <a href="https://github.com/fintheehuman" className="developer">Finesse Poole</a>
  <p>With a background in science, Finesse uses his experience in customer service and leadership to make the web a more usable place for everyone.</p>
  <br/>
  <a href="https://github.com/JoanavelPascual7" className="developer">Joanavel Pascual</a>
  <p>Joanavel Pascual is a web developer with a passion for social impact. Based in New York City, he has a background in social work. </p>
</div>
</div>
<br/>
<h6>Credits</h6>
<ul>
  <li><a href="https://www.freepnglogos.com/pics/youtube-logo-png">Header Youtube Logo from freepnglogos.com</a></li>
</ul>
</>


  )
}

export default About
