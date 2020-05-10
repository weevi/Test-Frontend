import React from 'react';
import warning from '../assets/warning.svg';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: null,
        email: null,
        errors: {
          name: '',
          email: '',
          password: '',
        }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'name': 
          errors.name = 
            value.length < 5
              ? 'Full Name must be 5 characters long!'
              : '';
          break;
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        default:
          break;
      }

      this.setState({errors, [name]: value});
  }
  
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }
  
    render() {
      const {errors} = this.state;
      return (
        <div className="form__fieldset__container">
        <form onSubmit={this.handleSubmit}>
          <p>Fill out your details, and we get back to you shortly:</p>
          <div className="form__fieldset--item">
            <input type="text" name="name" placeholder="name" onChange={this.handleChange} noValidate />
              {errors.name.length > 0 && 
                <span className='error'><img src={warning} alt="warning sign"/>{errors.name}</span>}
            </div>

            <div className="form__fieldset--item">
            <input type="text" name="email" placeholder="email" value={this.state.value} onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'><img src={warning} alt="warning sign"/>{errors.email}</span>}
            </div>


            <div className="form__fieldset--item textarea--item">
            <textarea placeholder="note" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div>
            <p className="fieldset__comment">This information will be used by NordPass to respond to your <br />inquiry as provided in our <a href='#'>Privacy Policy</a>.</p>
            <button className="btn">Get started</button>
          </div>
        </form>
        </div>
      );
    }
  }

  export default Form;