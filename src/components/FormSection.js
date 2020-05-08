import React from 'react';
import Form from './Form';

class FormSection extends React.Component {
    render() {
        return (
            <div className="form__section">

                <div className="subheader">
                    <h2>Get NordPass for business</h2>
                </div>

                <div className="form__subsection">

                    <div class="form__img__wrap">
                        <div class="form__img"></div>
                    </div>

                    <Form />

                </div>
            </div>
        )
    }
}

export default FormSection;