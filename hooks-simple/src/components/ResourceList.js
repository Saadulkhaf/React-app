import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReasourceList = () => {
    const [resources, setResources ] = useState([]);

    const fetchResources = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resources}`);

        setResources(response.data);
    }

    return (
        <div>
            {resources.length}
        </div>
    );
}

export default ReasourceList;