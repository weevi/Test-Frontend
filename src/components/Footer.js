import React from 'react';


class Footer extends React.Component {
    render() {
        return(
        <footer>
            <div>
                <ul className="footer__list">
                    <li><a href="#">Engage</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>

                <p>Copyright &copy; 2020 NordPass.com</p>

        </footer>
        )
    }
}

export default Footer;