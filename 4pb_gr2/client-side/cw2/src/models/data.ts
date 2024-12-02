export type Game = {
    id: number;
    name: string;
    description: string;
    price: number;
}
export const games: Game[] = [
    {
        id: 1,
        name: 'The Legend of Zelda: Breath of the Wild',
        description: 'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.',
        price: 79.99
    },
    {
        id: 2,
        name: 'Super Mario Odyssey',
        description: 'Join Mario on a massive, globe-trotting 3D adventure and use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser’s wedding plans!',
        price: 39.99
    },
    {
        id: 3,
        name: 'Mario Kart 8 Deluxe',
        description: 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere',
        price: 59.99
    },
    {
        id: 4,
        name: 'Splatoon 2',
        description: 'Ink-splatting action is back and fresher than ever',
        price: 159.99
    },
    {
        id: 5,
        name: 'Super Smash Bros. Ultimate',
        description: 'Gaming icons clash in the ultimate brawl you can play anytime, anywhere!',
        price: 49.99
    }
];
export const colors = ["red", "green", "blue",
    "yellow", "black", "white", "purple", "pink",
    "orange", "brown"];