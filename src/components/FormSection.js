import React from 'react';
import Form from './Form';

class FormSection extends React.Component {
    render() {
        return(
            <section className="form__section">

                <div class="form__img__wrap">
                <div class="form__img"></div>
                </div>
                <Form />

            </section>
        )
    }
}

export default FormSection;