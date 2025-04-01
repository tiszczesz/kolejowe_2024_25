export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;    
}
export const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "555-123-4567"
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com",
        phone: "444-555-6666"
    },
    {
        id: 5,
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        phone: "333-222-1111"
    }
];
export const getMaxId = (users:User[]) => {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
}