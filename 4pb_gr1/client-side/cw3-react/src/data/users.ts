export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    isLogged: boolean;
}
export const users: User[] = [
{
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    isLogged: true
},
{
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    isLogged: false
},
{
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "user",
    isLogged: true
},
{
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    role: "moderator",
    isLogged: false
},
{
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    role: "user",
    isLogged: true
},
{
    id: 6,
    name: "Diana Evans",
    email: "diana.evans@example.com",
    role: "admin",
    isLogged: false
},
{
    id: 7,
    name: "Eve Foster",
    email: "eve.foster@example.com",
    role: "user",
    isLogged: true
},
{
    id: 8,
    name: "Frank Green",
    email: "frank.green@example.com",
    role: "moderator",
    isLogged: false
},
{
    id: 9,
    name: "Grace Harris",
    email: "grace.harris@example.com",
    role: "user",
    isLogged: true
},
{
    id: 10,
    name: "Henry Jackson",
    email: "henry.jackson@example.com",
    role: "user",
    isLogged: false
}
];
    