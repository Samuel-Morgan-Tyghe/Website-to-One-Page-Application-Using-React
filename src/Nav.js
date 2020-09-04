import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {


const navStyle = {
color: 'white'

};

  return (
  <nav  className='puttoback'>
<ul className='nav-links'>
<Link style={navStyle} to="/Basic-Website-To-React">
<li>Home</li>
</Link>
<Link style={navStyle} to="/about">
<li>About</li>
</Link>
<Link style={navStyle} to="/projects">
<li>Projects</li>
</Link>

</ul>
</nav>
  );
}

export default Nav;