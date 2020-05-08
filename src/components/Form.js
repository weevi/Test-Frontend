import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <p>Fill out your details, and we get back to you shortly:</p>
          <div className="form__elem__wrap">
            <input type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div className="form__elem__wrap">
            <input type="text" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div className="form__elem__wrap textarea__wrap">
            <textarea placeholder="Note" value={this.state.value} onChange={this.handleChange} />
            </div>

            <div>
            <p className="comment">This information will be used by NordPass to respond to your <br />inquiry as provided in our <a href='#'>Privacy Policy</a>.</p>
            <button className="btn">Get started</button>
          {/* <input className="btn" type="submit" value="Submit" /> */}
          </div>
        </form>
        </div>
      );
    }
  }

  export default Form;