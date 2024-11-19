import { Game, games } from './data.js';

console.log(games);
function getGameById(content: Game[], id: number): Game | undefined {
    return games.find(g => g.id === id);
}
console.log(getGameById(games, 2));
console.log(getGameById(games, 5));
const totalPrice = (content: Game[]): number => {
    let total = 0;
    for (let g of content) {
        total += g.price;
    }
    return total;
}
console.log(`całkowita cena gier: ${totalPrice(games)}`);
//najtańsza gra
const cheapestGame = (content: Game[]): Game | undefined => {
    if (content.length === 0) return undefined
    let cheapest = content[0];
    for (let g of content) {
        if (g.price < cheapest.price) {
            cheapest = g;
        }
    }
    return cheapest;
}
console.log(cheapestGame(games));