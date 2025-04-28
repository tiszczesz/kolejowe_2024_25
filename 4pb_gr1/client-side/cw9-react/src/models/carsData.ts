export type Car = {
    id:number
    title:string;
    alt:string;
    src:string;
    description:string;
    likes:number;
}
export const carsData:Car[] = [
    {
        id: 1,
        title: "Tesla Model S",
        alt: "Tesla Model S",
        src: "tesla.jpg",
        description: "A luxury electric sedan with impressive range and performance.",
        likes: 10,
    },
    {
        id: 2,
        title: "Ford Mustang",
        alt: "Ford Mustang",
        src: "Ford-Mustang.jpg",
        description: "An iconic American muscle car known for its power and style.",
        likes: 10,
    },
    {
        id: 3,
        title: "Toyota Corolla",
        alt: "Toyota Corolla",
        src: "Toyota-Corolla.jpg",
        description: "A reliable and fuel-efficient compact car popular worldwide.",
        likes: 0,
    },
    {
        id: 4,
        title: "BMW X5",
        alt: "BMW X5",
        src: "BMW-X5.jpg",
        description: "A luxury SUV offering a blend of performance and comfort.",
        likes: 0,
    },
    {
        id: 5,
        title: "Honda Civic",
        alt: "Honda Civic",
        src: "Honda-Civic.jpg",
        description: "A compact car with a reputation for reliability and efficiency.",
        likes: 0,
    }
];
