import React from 'react';

function UserInput (props) {
    return (
        <div>
            <p>this is input component</p>
            <input type="text" value={props.searchKey} onChange={props.changed} />
        </div>
    );
};

export default UserInput;