import React from 'react';


class Header extends React.Component {
    render() {
        return(
        <header>
        <div className="header__wrap">
            <div className="title__container">
                
                <div className="title__wrapper">
                    <h1>Get your passwords<br />organized</h1>
                    <button className="btn btn--header">Get started</button>
                </div>
            </div>

                <div className="main__img"></div>
        </div>
        </header>
        )
    }
}

export default Header;