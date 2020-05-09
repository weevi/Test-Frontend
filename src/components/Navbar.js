import React from 'react';
import '../App.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isExpanded: true
        };
      }
      handleToggle(e) {
        e.preventDefault();
        this.setState({
          isExpanded: !this.state.isExpanded
        });
      }
    render() {
        const { isExpanded } = this.state;

        return (
            <section className="nav__section">
                <nav>
                    <a href="#" className="nav__item nav__logo">
                        NordPass
                    </a>

                    <div className="menu" onClick={e => this.handleToggle(e)}>Menu</div>

                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <li className="nav__item"><a href="#">Features</a></li>
                        <li className="nav__item"><a href="#">Pricing</a></li>
                        <li className="nav__item"><a href="#">Apps</a></li>
                        <li className="nav__item"><a href="#">Blog</a></li>
                        <li className="nav__item"><a href="#">Help</a></li>
                        <li className="nav__item"><a href="#">My Account</a></li>
                        <button className="btn btn--nav">Open Vault</button>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Navbar;