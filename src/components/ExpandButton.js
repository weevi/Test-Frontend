import React from 'react';

class ExpandButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          itemsToShow: 20,
          expanded: false
        };
        this.showMore = this.showMore.bind(this);
      }

    showMore(e) {
        this.state.itemsToShow === 20 ? (
          this.setState({ itemsToShow: this.props.listLength, expanded: true 
        },
        () => {
            this.props.itemsToShow(this.state.itemsToShow);
            this.props.expanded(this.state.expanded);
        })
        ) : (
            this.setState({ itemsToShow: 20, expanded: false 
            },
            () => {
                this.props.itemsToShow(this.state.itemsToShow);
                this.props.expanded(this.state.expanded);
            })
          )
      }


    render() {
        return (
            <div className="btn__list">
            <button className="btn" onClick={this.showMore}>
              {this.state.expanded ? (
                <span value="20">Show 20</span>
              ) : (
                <span value={this.props.listLength}>Show all ({this.props.listLength})</span>
                )
              }
            </button>
          </div>
        );    
    }
}

export default ExpandButton;