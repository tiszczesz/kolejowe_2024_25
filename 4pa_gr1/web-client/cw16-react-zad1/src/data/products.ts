export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
};
export const categories = [
    'Electronics',
    'Books',
    'Clothing',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Toys & Games',
    'Beauty & Personal Care',
    'Automotive',
    'Health & Household',
    'Grocery & Gourmet Food'
];
export const products: Product[] = [
    {
        id: 1,
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation.',
        price: 99.99,
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Fantasy Novel',
        description: 'A captivating fantasy novel with an epic storyline.',
        price: 14.99,
        category: 'Books'
    },
    {
        id: 3,
        name: 'Running Shoes',
        description: 'Comfortable and durable running shoes for all terrains.',
        price: 59.99,
        category: 'Sports & Outdoors'
    },
    {
        id: 4,
        name: 'Blender',
        description: 'A powerful blender for smoothies and food preparation.',
        price: 49.99,
        category: 'Home & Kitchen'
    },
    {
        id: 5,
        name: 'Action Figure',
        description: 'A collectible action figure from a popular franchise.',
        price: 19.99,
        category: 'Toys & Games'
    },
    {
        id: 6,
        name: 'Lipstick Set',
        description: 'A set of vibrant lipsticks in various shades.',
        price: 24.99,
        category: 'Beauty & Personal Care'
    },
    {
        id: 7,
        name: 'Car Vacuum Cleaner',
        description: 'A compact vacuum cleaner designed for car interiors.',
        price: 29.99,
        category: 'Automotive'
    },
    {
        id: 8,
        name: 'Vitamin C Tablets',
        description: 'A bottle of Vitamin C tablets to boost immunity.',
        price: 12.99,
        category: 'Health & Household'
    },
    {
        id: 9,
        name: 'Organic Coffee Beans',
        description: 'Premium organic coffee beans for a rich flavor.',
        price: 15.99,
        category: 'Grocery & Gourmet Food'
    },
    {
        id: 10,
        name: 'Winter Jacket',
        description: 'A warm and stylish winter jacket for cold weather.',
        price: 89.99,
        category: 'Clothing'
    }
]
export const getLastId = (products: Product[]): number => {
    const ids = products.map((product) => product.id);
    const maxId = Math.max(...ids);
    return maxId;
}