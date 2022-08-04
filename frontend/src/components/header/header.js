import React from 'react';
import './header.css';
import logoUrl from '../../assets/png/nasa_logo.png';
const Header = () => (
  <div className="header">
     <img src={logoUrl} alt="Nasa" /> 
  </div>
)
export default Header