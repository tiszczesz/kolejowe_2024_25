import { Game } from "./data.js";

export const getTotalPrice = (games: Game[]): number => {
    let total = 0;
    for (let game of games) {
        total += game.price;
    }
    return total;
};
export const getMaxPriceGame = (games: Game[]): Game | null => {
    if (games.length === 0) {
        return null;
    }
    let maxPrice = games[0].price;
    let maxPriceGame = games[0];
    for (let game of games) {
        if (game.price > maxPrice) {
            maxPrice = game.price;
            maxPriceGame = game;
        }
    }
    return maxPriceGame;
};
export const getMinPriceGame = (games: Game[]): Game | null => {
    if (games.length === 0) {
        return null;
    }
    let minPrice = games[0].price;
    let minPriceGame = games[0];
    for (let game of games) {
        if (game.price < minPrice) {
            minPrice = game.price;
            minPriceGame = game;
        }
    }
    return minPriceGame;
};