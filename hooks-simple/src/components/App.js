import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from './UserList';

const App = () => {
  const [resources, setResources] = useState("posts");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResources("posts")}>Posts</button>
        <button onClick={() => setResources("todos")}>Todos</button>
      </div>
      <ResourceList resource={resources} />
    </div>
  );
};

export default App;
