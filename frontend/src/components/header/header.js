import React from 'react';
import './header.css';
import logoUrl from '../../assets/png/nasa_logo.png';
const Header = () => (
  <div className="header sticky">
    <div className='logo-container'>
      <a href='#'>
        <img src={logoUrl} alt="Nasa" /> 
      </a> 
     </div>
  </div>
)
export default Header