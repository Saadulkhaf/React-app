import React from 'react';

const Loader = (props) => {
    const {message} = props;
    return (
        <div className="ui active inverted dimmer">
        <div className="ui text loader">{message}</div>
    </div>
    );
    
}

Loader.defaultProps = {
    message : "Loading"
}

export default Loader;