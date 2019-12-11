import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Gallery_Navbar.scss"

class GalleryNavbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { category } = this.props;
        return(
            <nav className="gallery_navbar_container">
                <div className="logo">BARBER SHOP</div>
                <ul>
                    <Link to="/gallery/men"><li className={ category==="men" ? "active" : ""}>Men</li></Link>
                    <Link to="/gallery/women"><li className={ category==="women" ? "active" : ""}>Women</li></Link>
                    <Link to="/gallery/products"><li className={ category==="products" ? "active" : ""}>Products</li></Link>
                </ul>
            </nav>
        ) 
    }
}

export default GalleryNavbar;