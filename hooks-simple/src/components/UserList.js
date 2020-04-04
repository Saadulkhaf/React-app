import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users');

    return (
        <ol>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ol>
    );
};

export default UserList;