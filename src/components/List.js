import React from 'react';
import FilterJson from './FilterJson';
import SortDropDown from './SortDropDown';
import ExpandButton from './ExpandButton';



class List extends React.Component {
    constructor() {
        super();
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          selectedValue: 'count', 
          itemsToShow: 20,
          expanded: false
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
    
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )  
      }
    handleSelection = (e) => {
        this.setState({selectedValue: e});
    }
    handleShowCount = (e) => {
        this.setState({itemsToShow: e});
      }
      handleExpanded = (e) => {
          this.setState({expanded: e})
      }

    render() {
        return (
            <section>
                <div className="subheader">
                    <h2>Top leaked passwords</h2>
                </div>

                <div className="list__subtitle">

                    <h4>Password</h4>
                    <SortDropDown dropValue = {this.handleSelection}/>

                </div>
                <div className="password">

                    <FilterJson 
                        jsonData = {this.state.items}
                        error = {this.state.error}
                        isLoaded = {this.state.isLoaded}
                        selectedValue = {this.state.selectedValue}
                        itemsToShow = {this.state.itemsToShow}/>
                    <ExpandButton 
                        itemsToShow = {this.handleShowCount}
                        expanded = {this.handleExpanded}
                        listLength = {this.state.items.length}/>                    
                </div>
            </section>
        )
    }
}

export default List;