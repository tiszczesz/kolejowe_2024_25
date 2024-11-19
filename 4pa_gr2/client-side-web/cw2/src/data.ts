export type Game = {
    id: number;
    name: string;
    price: number;
    date: Date
}
export const games: Game[] = [
    {
        id: 1,
        name: 'GTA V',
        price: 50,
        date: new Date('2021-01-01')
    },
    {
        id: 2,
        name: 'FIFA 21',
        price: 60,
        date: new Date('2021-02-01')
    },
    {
        id: 3,
        name: 'Cyberpunk 2077',
        price: 70,
        date: new Date('2021-03-01')
    }
];