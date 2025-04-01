export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
};
export const categories = 
    ['elektronika', 'odzież', 'meble', 'sport', 'żywność'];

export const products: Product[] = [
    {
        id: 1,
        name: 'Laptop',
        price: 2999.99,
        description: 'Wydajny laptop do pracy i gier',
        category: 'elektronika',
    },
    {
        id: 2,
        name: 'T-shirt',
        price: 49.99,
        description: 'Koszulka bawełniana z nadrukiem',
        category: 'odzież',
    },
    {
        id: 3,
        name: 'Sofa',
        price: 1499.99,
        description: 'Wygodna sofa z funkcją spania',
        category: 'meble',
    },
    {
        id: 4,
        name: 'Piłka nożna',
        price: 79.99,
        description: 'Piłka do gry w piłkę nożną',
        category: 'sport',
    },
    {
        id: 5,
        name: 'Czekolada',
        price: 4.99,
        description: 'Pyszna czekolada mleczna',
        category: 'żywność',
    }
];