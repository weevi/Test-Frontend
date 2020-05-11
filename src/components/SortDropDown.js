import React from 'react';

class SortDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'count'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({ selectedValue: event.target.value
        },
            () => {
                this.props.dropValue(this.state.selectedValue);
            });

      }

    render() {
        return (
          <select onChange={this.handleChange} className="list__subtitle--count" value={this.state.selectedValue}>
            <option value="count">Count</option>
            <option value="value">ABC</option>
          </select>
        );    
    }
}


export default SortDropDown;