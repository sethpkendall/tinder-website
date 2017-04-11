import React, { Component } from 'react';
import './Header.css';
import Logo from '../../images/Logo.png';

class Header extends Component {
  render() {
    return (
      <div id="HeaderRoot">
        <img
          src={Logo}
          id="Logo"
          alt="Tinder Logo"
        />
      </div>
    )
  }
}
export default Header;
