import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/aitzaz-ahmad-96479b4b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
          <p>Let’s collaborate — message me on <a href="https://www.linkedin.com/in/aitzaz-ahmad-96479b4b/" target="_blank" rel="noreferrer">Linkedin</a> </p>
    </footer>
  );
}

export default Footer;