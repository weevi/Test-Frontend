import React from 'react';
import '../App.css'


class Navbar extends React.Component {
    render() {
        return(
        <nav className="navbar">
            <div className="navbar__logo__wrapper">
            <a href="/" className="navbar__logo">Logo</a>
            </div>
            <ul className="navbar__links">
                <li className="navbar__item"><a href="#">Features</a></li>
                <li className="navbar__item"><a href="#">Pricing</a></li>
                <li className="navbar__item"><a href="#">Apps</a></li>
                <li className="navbar__item"><a href="#">Blog</a></li>
                <li className="navbar__item"><a href="#">Help</a></li>
                <li className="navbar__item"><a href="#">My Account</a></li>
                <button className="btn btn--nav">Open Vault</button>
            </ul>
        </nav>
        )
    }
}

export default Navbar;