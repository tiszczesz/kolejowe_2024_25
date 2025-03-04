export type User = {
    id: number;
    name: string;
    email: string;
    isLogged: boolean;
}
export const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'sdss@ffff',
        isLogged: false
    },
    {
        id: 2,
        name: 'Jane Trrrr',
        email: 'aaa@ggg.pl',
        isLogged: true
    },
    {
        id: 3,
        name: 'Gane Robe',
        email: 'gg@ffff',
        isLogged: true
    }
];