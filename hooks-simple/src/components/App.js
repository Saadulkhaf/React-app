import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resources, setResources] = useState('posts');

    return(
        <div>
            <div>
                <button onClick={()=> setResources('posts')}>Posts</button>
                <button onClick={()=> setResources('todos')}>Todos</button>
            </div>
            <ResourceList resource = { resources }/>
        </div>
    );

};

export default App;