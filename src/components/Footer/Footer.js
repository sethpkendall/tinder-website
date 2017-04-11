import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="FooterRoot">
        <div className="row">
          <div className="contact-list-div col-md-4">
            <p id="Footer-head">Contact Us</p>
            <ul className="contact-list">
              <li><a href="mailto:Info@tinderlab.com?subject=WebsiteInquiry" target="_top">Info@tinderlab.com</a></li>
              <li>503-380-5721</li>
              <li>107 SE Washington Street</li>
              <li>Suite 445</li>
              <li>Portland, Oregon 97214</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="bottom-banner">
            <p>Please excuse our website while it's under construction.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;
