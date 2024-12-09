export const data: string[] = ['a', 'b', 'c'];
export interface Game{
    name: string;
    price: number;
    genre: string;
    year: number;
}
export const games: Game[] = [
    {
        name: 'GTA V',
        price: 60,
        genre: 'Action',
        year: 2013
    },
    {
        name: 'The Witcher 3',
        price: 50,
        genre: 'RPG',
        year: 2015
    },
    {
        name: 'Cyberpunk 2077',
        price: 60,
        genre: 'RPG',
        year: 2020
    }
];