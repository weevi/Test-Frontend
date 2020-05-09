import React from 'react';

class FilterJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      itemsToShow: 20,
      expanded: false,
      value: 'count'
    };
    this.showMore = this.showMore.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
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

  showMore() {
    this.state.itemsToShow === 20 ? (
      this.setState({ itemsToShow: this.state.items.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 20, expanded: false })
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
            
            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="count">Count</option>
                                <option value="abc">ABC</option>
                            </select>
            <ul className="password__items">
              {this.state.items.slice(0, this.state.itemsToShow).map(item => 
                  <li className="password__item"  key={item.count}><span>{item.value}</span> {item.count}</li>
              )}
           </ul>
                <div className="btn__wrapper">
            <button className="btn" onClick={this.showMore}>
            {this.state.expanded ? (
             <span>Show 20 </span>
           ) : (
             <span>Show all ({items.length})</span>
           )
          }
          </button>
          </div>
        </div>
      );
    }
  }
}

export default FilterJson;