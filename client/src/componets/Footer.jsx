import React from 'react';

function  Footer ()  {

  const currentYear = new Date().getFullYear();
  
  return <div className="footer-container" id="footerSection">
      <div className="footer-box" id="footer-box">
          <div className="footer-about" id="footer-about">
              <h2>About Us</h2>
              <p>
                Providing high quality coconut products with
                a focus on sustainability and environmental
                consciousness.
              </p>
              <ul className="media" id="media">
                <li><a><i class='bx bxl-instagram'></i></a></li>
                <li><a><i class='bx bxl-tiktok' ></i></a></li>
                <li><a><i class='bx bxl-facebook-circle' ></i></a></li>
                <li><a><i class='bx bxl-linkedin-square'></i></a></li>
              </ul>
          </div>
          <div className="quick-links" id="quick-links">
              <h2>Quick Links</h2>
              <ul>
                  <li><a href="#About"> Home</a></li>
                  <li><a href="#Products"> Products</a></li>
                  <li><a href="#Team">Our Team</a></li>
                  <li><a href="#Contact">Help </a></li>
                  <li><a href="#Contact">Contact Us</a></li>
              </ul>
          </div>
          <div className="Contact-info" id="contact-info">
              <h2>Contact Info</h2>
              <div class="contact-detail" id="contact-detail">
                  <i class='bx bxl-whatsapp' ></i>
                  <p>+43 677 64433090</p>
              </div>
              <div class="contact-detail" id="contact-detail">
                  <i class='bx bxs-phone-outgoing'></i>
                  <p>+254 792 711 045</p>
              </div>
              <div class="contact-detail" id="contact-detail">
                  <i class='bx bx-mail-send'></i>
                  <p>info@joraf.co.ke</p>
              </div>
          </div>
      </div>
      <hr/>
          <div className="copyright-container" id="copyright-container">
              <div className="copyright" id="copyright">
                  <p>
                      &copy; {currentYear} Joraf Enterprise. All rights reserved
                  </p>
              </div>
              <div className="conditions" id="conditions">
                  <a className="terms">Terms & Conditions</a>
                  <a>Privacy Policy</a>
                  <a>Terms of Service</a>
                  <a>Cookie Settings</a>
              </div>
          </div>
  </div>
}
export default Footer;