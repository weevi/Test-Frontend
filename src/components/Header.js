import React from 'react';


class Header extends React.Component {
    render() {
        return(
        <header>

            <div className="title__container">
                
                <div className="title__wrapper">
                    <h1>Get your passwords<br />organized</h1>
                    <button className="btn">Get started</button>
                </div>
                    {/* <div className="main__btn">Button</div> */}
            </div>

                <div className="main__img"></div>

        </header>
        )
    }
}

export default Header;