import React from 'react';
import FilterJson from './FilterJson';


class List extends React.Component {
       render() {
        return (
            <section>
                <div className="subheader">
                    <h2>Top leaked passwords</h2>
                </div>
                <div className="list__container">

                    <div className="list">
                        <h4 className="password">Password</h4>
                        <div>
                        </div>
                    </div>
                    <FilterJson />

                </div>
            </section>
        )
    }
}

export default List;