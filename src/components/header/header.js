import React from 'react'
import NavLink from './navLink';

const Header = () => (
    <header style={{backgroundColor: "rgb(225,224,234)", width: "100%", height: "100px"}}>
        <img src="" alt="not available yet" style={{float: "left", marginRight: "350px"}}/>
        <ul style={{listStyle: "none", float: "right"}}>
            <NavLink path="./">Home</NavLink>
            <NavLink path="../about/">About</NavLink>
            <NavLink path="../products/">Products</NavLink>
            <NavLink path="../contact/">Contact</NavLink>
            <NavLink path="../team/">Team</NavLink>
        </ul>
    </header>
);
  
export default Header;