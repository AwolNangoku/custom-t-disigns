import React from 'react';
import {Link} from 'gatsby';

const NavLink = ({path, children}) => (
    <li style={{display: "inline-block", marginRight: "20px"}}>
        <Link to={path}>{children}</Link>
    </li>
);

export default NavLink
