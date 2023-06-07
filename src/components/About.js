import React from 'react';
import SaraiPic from "../assets/Pursuit_ST.jpg";
import JenniferPic from "../assets/Jennifer Einstein_2022_Pursuit_a copy.jpg";
import JoanavelPic from "../assets/Pursuit_JP.jpg";
import FinessePic from "../assets/Pursuit_FP2.jpg";
import "./About.css";

function About() {
  return (
    <>


<div className="container-fluid p-5">
  <div>
  <h4 className="display-6">About This Project</h4>
  <p>
    The YouTube Clone project is an application designed to allow users to search for YouTube videos using the YouTube API and watch their chosen videos from a list. The project aims to assess the proficiency of React skills acquired by the developers (listed below).
    </p>
  <p>
    The applicaiton was developed using a stack of technologies, including React, Javascript, HTML, CSS, BootStrap, and YouTube Data API v3.
    </p>
  <p>
    Throughout the project, developers applied given criteria while working collaboratively in a group. Criteria included using Git and GitHub for version control, making requests to the YouTube API, writing clean and readable JavaScript, creating components with JSX, using React state and props, and incorporating React Router components for URL routing. By fulfilling these criteria, the developers demonstrate their proficiency in React development and their ability to build a functional YouTube clone.
    </p>
  <p>
    In addition to creating the application itself, this project involved collaborative work within a group. The initial steps included understanding how to implement the project requirements, creating a Trello board for task management, and establishing a GitHub repository for version control. Storing the codebase in a Github repository shared among team members allowed for concurrent development. 

  </p>
  <p>
  The creation of this application is a requirement for the Pursuit fellowship, specifically for class 9.6. The Pursuit fellowship is an exclusive 12-month software engineering program funded by Google and it boasts a highly competitive acceptance rate of 9%. The fellowship offers a project-based curriculum that provides valuable hands-on experience in various technologies, including JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, git, data structures, algorithms, sprints, Agile, code reviews, and pair programming.
  </p>
  <p>
  By participating in this fellowship, the developers gain comprehensive knowledge and practical skills in a wide range of essential programming concepts and tools, preparing them for successful careers in the software engineering industry.
  </p>
  </div>
  <div>
    <h4 className="display-6">About Us</h4>

  <img 
    src={SaraiPic} 
    alt="profile pic of Sarai" 
    className="img-thumbnail profile-pic "/>

    <a href="https://github.com/Sarai-ii" className="developer">Sarai Thomas </a>

    <p>Sarai Thomas is a software engineer and digital designer; she is also the lead on this project. Sarai has combined her background in business with her creativity skills to become the CEO and creative director of GLD RZÉ, a new luxery jewelry line.</p>
    <br/>
    <img 
    src={JenniferPic} alt="profile pic of Jennifer" className="profile-pic img-thumbnail"/>
    <a href="https://github.com/JenniferEinstein" className="developer">Jennifer Einstein </a>
    <p>Hailing from the Golden State, Jennifer Einstein moved to New York City over 20 years ago and never looked back. She aims to make the modern world a better place, one line of code at a time. </p>
    <br/>
    <img 
    src={FinessePic} 
    alt="profile pic of Finesse" 
    className="profile-pic img-thumbnail"/>
    <a href="https://github.com/fintheehuman" className="developer">Finesse Poole</a>

    <p>With a background in science, Finesse uses his experience in customer service and leadership to make the web a more usable place for everyone.</p>
    <br/>
    <img 
    src={JoanavelPic} 
    alt="profile pic of Joanavel" 
    className="img-thumbnail profile-pic "/>
    <a href="https://github.com/JoanavelPascual7" className="developer">Joanavel Pascual</a>
    <p>Joanavel Pascual is a web developer with a passion for social impact. Based in New York City, he has a background in social work. </p>
  </div>
  <br/>
  <div>
    <h6 >Credits</h6>
      <ul>
        <li><a href="https://www.freepnglogos.com/pics/youtube-logo-png">Header Youtube ogo from freepnglogos.com</a></li>
      </ul>
  </div>
</div>
</>
  )
}

export default About;
