export const colors = [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'brown',
    'black', 'white', 'gray'];

export const size = [10,12,14,18,24,32,38];
export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}
export const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Description of product 1',
        image: 'prod1.png'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'Description of product 2',
        image: 'prod1.png'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'Description of product 3',
        image: 'prod1.png'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 400,
        description: 'Description of product 4',
        image: 'prod1.png'
    },
    {
        id: 5,
        name: 'Product 5',
        price: 500,
        description: 'Description of product 5',
        image: 'prod1.png'
    },
    {
        id: 6,
        name: 'Product 6',
        price: 600,
        description: 'Description of product 6',
        image: 'prod1.png'
    },
    {
        id: 7,
        name: 'Product 7',
        price: 700,
        description: 'Description of product 7',
        image: 'prod1.png'
    },
    {
        id: 8,
        name: 'Product 8',
        price: 800,
        description: 'Description of product 8',
        image: 'prod1.png'
    },
    {
        id: 9,
        name: 'Product 9',
        price: 900,
        description: 'Description of product 9',
        image: 'prod1.png'
    },
    {
        id: 10,
        name: 'Product 10',
        price: 1000,
        description: 'Description of product 10',
        image: 'prod1.png'
    }
];