import React from 'react';
import Subheader from './Subheader';
import FilterJson from './FilterJson';


class List extends React.Component {
    render() {
        return(
        <section>
            <Subheader />
            <div className="list__container">
                
            <div className="list">
                <h4 className="password">Password</h4>
                <div>
                <ul className="dropdown">
                    <li>Count</li>
                    <li>ABC</li>
                </ul>
                </div>
            </div>
            <FilterJson />

            </div>
        </section>
        )
    }
}

export default List;