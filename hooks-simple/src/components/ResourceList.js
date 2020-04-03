import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReasourceList = ({ resource }) => {
    const [resources, setResources ] = useState([]);

    const fetchResources = 

    useEffect (() => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    
            setResources(response.data);
        })(resource)
    }, [resource])

    return (
        <div>
            {resources.length}
        </div>
    );
}

export default ReasourceList;