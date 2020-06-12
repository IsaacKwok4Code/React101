import React from 'react';

function BoilingMessage(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default BoilingMessage;
