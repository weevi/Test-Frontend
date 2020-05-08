import React from 'react';
import Form from './Form';

class FormSection extends React.Component {
    render() {
        return(
            <header>

            <div className="title__container">
                <div className="title__wrapper">
                    <h2>Get your passwords<br />organized</h2>
                </div>
                    {/* <div className="main__btn">Button</div> */}
            </div>

            <div className="main__img">
                <div className="main__img__picture"></div>
            </div>

        </header>
        )
    }
}

export default FormSection;