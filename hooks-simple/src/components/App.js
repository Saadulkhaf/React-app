import React, { useState } from 'react';

const App = () => {
    const [resources, setResources] = useState('posts');

    return(
        <div>
            <div>
                <button onClick={()=> setResources('posts')}>Posts</button>
                <button onClick={()=> setResources('todooos')}>Todos</button>
            </div>
            {resources}
        </div>
    );

};

export default App;