import React from 'react';

function UserOutput (props) {
    return (
        <div className="UserOutput">
            <p>this is output component</p>
            <p>SearchKey: {props.searchKey}</p>
        </div>
    );
};

export default UserOutput;