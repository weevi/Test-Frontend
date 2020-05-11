import React from 'react';
import _ from 'lodash';


class FilterJson extends React.Component {


  sortBy(){
    if(this.props.selectedValue === 'count') {
      return _.sortBy(_.each(this.props.jsonData, item => item.count = parseInt(item.count)),
            this.props.selectedValue).reverse();
    } else {
        return _.sortBy(this.props.jsonData, this.props.selectedValue);
       
    }      
  }

  render() {
    const error = this.props.error;
    const isLoaded = this.props.isLoaded;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        var passwordList =
        this.sortBy().slice(0, this.props.itemsToShow).map(item =>
            <li className="password__item" key={item.count}>
                <span>{item.value}</span>
              {item.count}
            </li>
          )
      return (

        <div>
          <ul className="password__items">{passwordList}</ul>
        </div>
      );
    }
  }
}

export default FilterJson;