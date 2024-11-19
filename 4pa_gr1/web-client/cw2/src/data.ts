export type User = {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
}
export const users: User[] = [
    {
        id: 1,
        name: 'John',
        email: 'john@.example.com',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Ann',
        email: 'ann@.example.com',
        role: 'user'
    },
    {
        id: 3,
        name: 'Tomasz',
        email: 'tomasz@.example.com',
        role: 'admin'
    },
]

export function getWords(text:string):string[] {
    text = text.replace(/[.,]/g, '');
    return text.split(' ');
}