import React from 'react';
import FilterJson from './FilterJson';


class List extends React.Component {
    render() {
        return (
            <section>
                <div className="subheader">
                    <h2>Top leaked passwords</h2>
                </div>

                <div className="list__subtitle">

                    <h4>Password</h4>
                    <select className="list__subtitle--count">
                        <option value="count">Count</option>
                        <option value="abc">ABC</option>
                    </select>

                </div>
                <FilterJson />
            </section>
        )
    }
}

export default List;