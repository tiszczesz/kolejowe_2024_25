export type Car = {   
    model: string
    year: number
    color: string
    price: number
    promo?: boolean
}
export const cars: Car[] = [
    { model: 'Toyota', year: 2020, color: 'red', price: 20000 },
    { model: 'Fiat', year: 2012, color: 'blue', price: 10000,promo:true },
    { model: 'Volvo', year: 2019, color: 'green', price: 35000,promo:true },
    { model: 'Citroen', year: 2021, color: 'orange', price: 12000 }
];
