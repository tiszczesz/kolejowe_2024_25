export type User = {
    id: number;
    name: string;
    email: string;
    description: string;
}

export const usersData: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'dd@gmail.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

    {
        id: 2,
        name: 'Alice Doe',
        email: 'alice@gmail.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 3,
        name: 'Roman Doe',
        email: 'roman@gmail.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

]