import React from 'react';

class FilterJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://playground.tesonet.lt/v2/worst-psw.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.passwords
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div className="password">
        <ul className="password__items">
          {items.map(item => (
            <li className="password__item" key={item.count}>
              {item.value} <span>{item.count}</span>
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}

export default FilterJson;