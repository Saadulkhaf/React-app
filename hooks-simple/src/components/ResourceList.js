import React from 'react';

class ReasourceList extends React.Component {
    render() {
        return (
            <div>
                {this.props.resources}
            </div>
        );
    };
}

export default ReasourceList;