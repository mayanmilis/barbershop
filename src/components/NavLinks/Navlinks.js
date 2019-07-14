import React from 'react';
import './NavLinks.scss';

const NavLinks = () => {
    return(
            <nav>
                <div className="listContainer">
                    <ul>
                        <li><a href="/#home">HOME</a></li>
                        <li><a href="/#services">SERVICES</a></li>
                        <li><a href="/#about">ABOUT</a></li>                    
                    </ul>
                </div>
            </nav>
    )
}

export default NavLinks