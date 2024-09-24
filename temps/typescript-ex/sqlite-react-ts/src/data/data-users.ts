export type User = {
    id: number;
    name: string;
};

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    return users;
};