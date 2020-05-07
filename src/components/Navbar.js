import React from 'react';
import '../App.css'


class Navbar extends React.Component {
    render() {
        return(
        <nav className="navbar">
            <a href="/" className="navbar__logo">Logo</a>
            <ul className="navbar__links">
                <li className="navbar__item"><a href="#">Features</a></li>
                <li className="navbar__item"><a href="#">Pricing</a></li>
                <li className="navbar__item"><a href="#">Apps</a></li>
                <li className="navbar__item"><a href="#">Blog</a></li>
                <li className="navbar__item"><a href="#">Help</a></li>
                <li className="navbar__item"><a href="#">My Account</a></li>
            </ul>
        </nav>
        )
    }
}

export default Navbar;