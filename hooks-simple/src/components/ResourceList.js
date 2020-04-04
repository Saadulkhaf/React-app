import React from "react";
import useResources from './useResources';


const ReasourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <ul>
        {resources.map((record) => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ReasourceList;
