import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
    https://cdgames.fun/MAS/aitzaz.jpeg
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
                  <img src="https://cdgames.fun/MAS/aitzaz.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/aitzaz-ahmad-96479b4b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aitzaz Ahmad</h1>
          <p>Lead Game Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/aitzaz-ahmad-96479b4b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;