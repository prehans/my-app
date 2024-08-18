import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import Marquee from "react-fast-marquee";

export const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>Brand Name</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul>
            <h3>Careers</h3>
            <li><a href="#">Apply Online</a></li>
            <li><a href="#">Available Positions</a></li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">Our Responsibilities</a></li>
            <li><a href="#">Our Codes</a></li>
            <li><a href="#">Our Values</a></li>
          </ul>
        </div>
       
       
        <div className="newsletter">
          <h3>Stay in Touch</h3>
          {/* <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form> */}
          
          <div style={{marginTop:20}}>Mobile No. 6386268277 , 8604848741</div>
          <div style={{marginTop:20}}>Email : gptvaranasi10@gmail.com</div>
         
          <div className="social">
    <a href="mailto: gptvaranasi10@gmail.com"><i className="fas fa-envelope"></i></a>
      <a href="https://chat.whatsapp.com/JCrMJaU4XEWDKf8KmEaBBK" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
    <a href="https://www.instagram.com/gharpetuition_gpt_?igsh=MW53eHpmYjZ3ZW85dA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
</div>
        </div>
      </div>
     
      {/* <div className="info">
        <div className="legal">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        
      
       
      </div> */}
      {/* <div className="info">
      <Marquee>
            I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div> */}
       <div className="social">
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="info" style={{
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
 
  borderTop: '1px solid #ccc' 
}}>
  <Marquee>
    Ghar Pe Tuition - Best online education platform! &nbsp;&nbsp;|&nbsp;&nbsp; Learn from experts at home! &nbsp;&nbsp;|&nbsp;&nbsp; Enroll now !&nbsp;&nbsp;|&nbsp; Mobile No. 6386268277 &nbsp;&nbsp;|&nbsp;
  </Marquee>
</div>
      
    </footer>
  );
};

export default Footer;
