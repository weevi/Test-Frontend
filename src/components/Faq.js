import React from 'react';
import Subheader from './Subheader'

const data = [
    {
      id: 1,
      label: "Why should you use a password manager for business?",
      body: "Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!"
    },
    {
      id: 2,
      label: "How to choose the best password manager for business?",
      body: "Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!"
    },
    {
      id: 3,
      label: "How can I get a business password manager?",
      body: "Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!"
    }
  ];

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedId: null
    };
  }

  handleClick = selectedId => {
    this.setState({
      selectedId
    });
  };

  render() {
    return (
      <div className="faq">
        {data.map(tab => {
          const isActive = tab.id === this.state.selectedId;
          const display = isActive ? "block" : "none";

          return (
            <div className="accordion">

                <div className="accordion__title">
              <h3 onClick={() => this.handleClick(tab.id)}>{tab.label}</h3>
              <div className="accordion__arrow">&#94;</div>
                </div>

              <div className="accordion__body" style={{ display }}>{tab.body}</div>
            
            </div>
          );
        })}
      </div>
    );
  }
}

export default Faq;