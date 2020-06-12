import React from 'react';

function ClockFunctionalComponent(props) {
    return(
        <div className="Clock_functional">
            <p>This is functional component. { props.date.toLocaleTimeString()}.</p>
        </div>
    );
};

export default ClockFunctionalComponent;