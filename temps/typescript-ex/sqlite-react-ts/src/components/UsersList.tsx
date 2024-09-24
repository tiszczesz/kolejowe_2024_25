import React, { useEffect, useState } from 'react';
import { getUsers } from '../data/data-users';

interface User {
    id: number;
    name: string;
   
}

// const getUsers = async (): Promise<User[]> => {
//     // Replace with your actual data fetching logic
//     return [
//         { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//         { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
//     ];
// };

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                console.log('usersData:', usersData);
                
                setUsers(usersData);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                   
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersList;