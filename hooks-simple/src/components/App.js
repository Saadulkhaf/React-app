import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resources, setResources] = useState('posts');

    return(
        <div>
            <div>
                <button onClick={()=> setResources('posts')}>Posts</button>
                <button onClick={()=> setResources('todooos')}>Todos</button>
            </div>
            <ResourceList resources = { resources }/>
        </div>
    );

};

export default App;