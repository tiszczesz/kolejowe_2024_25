import { Game, games } from "./models/data.js";
import { getMaxPriceGame, getMinPriceGame, getTotalPrice } from "./models/tools.js";

console.log(games);
console.log('\n ===========================================  \n');

console.log(`Total price: ${getTotalPrice(games).toFixed(2)}`);
console.log(getMaxPriceGame(games));
console.log(getMinPriceGame(games));

