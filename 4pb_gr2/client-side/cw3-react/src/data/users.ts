export type User = {
    id: number;
    name: string;
    email: string;
    isLogin: boolean;
}
export const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        isLogin: true
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        isLogin: false
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        isLogin: true
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        isLogin: false
    },
    {
        id: 5,
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        isLogin: true
    },
    {
        id: 6,
        name: 'Diana Evans',
        email: 'diana.evans@example.com',
        isLogin: false
    },
    {
        id: 7,
        name: 'Eve Foster',
        email: 'eve.foster@example.com',
        isLogin: true
    },
    {
        id: 8,
        name: 'Frank Green',
        email: 'frank.green@example.com',
        isLogin: false
    },
    {
        id: 9,
        name: 'Grace Harris',
        email: 'grace.harris@example.com',
        isLogin: true
    },
    {
        id: 10,
        name: 'Henry Jackson',
        email: 'henry.jackson@example.com',
        isLogin: false
    }
];