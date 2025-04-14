export type Course = {
    id: number;
    name: string;
    description: string;
    price: number;
    counter: number;
    maxCounter: number;
}
export const courses: Course[] = [
    {
        id: 1,
        name: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
        price: 199.99,
        counter: 10,
        maxCounter: 30,
    },
    {
        id: 2,
        name: "Web Development Bootcamp",
        description: "Master HTML, CSS, and JavaScript to build modern websites.",
        price: 299.99,
        counter: 20,
        maxCounter: 40,
    },
    {
        id: 3,
        name: "Data Science Fundamentals",
        description: "Explore data analysis and visualization techniques.",
        price: 249.99,
        counter: 15,
        maxCounter: 25,
    },
    {
        id: 4,
        name: "Machine Learning Basics",
        description: "Understand the foundations of machine learning and AI.",
        price: 349.99,
        counter: 8,
        maxCounter: 20,
    },
    {
        id: 5,
        name: "Mobile App Development",
        description: "Build mobile applications using React Native.",
        price: 399.99,
        counter: 12,
        maxCounter: 30,
    },
    {
        id: 6,
        name: "Cybersecurity Essentials",
        description: "Learn how to protect systems and networks from cyber threats.",
        price: 299.99,
        counter: 18,
        maxCounter: 35,
    },
    {
        id: 7,
        name: "Cloud Computing with AWS",
        description: "Get started with cloud services and AWS architecture.",
        price: 349.99,
        counter: 10,
        maxCounter: 25,
    },
    {
        id: 8,
        name: "Game Development with Unity",
        description: "Create 2D and 3D games using Unity engine.",
        price: 399.99,
        counter: 14,
        maxCounter: 30,
    },
    {
        id: 9,
        name: "Digital Marketing Strategies",
        description: "Learn effective online marketing techniques.",
        price: 199.99,
        counter: 25,
        maxCounter: 50,
    },
    {
        id: 10,
        name: "Advanced JavaScript",
        description: "Deep dive into JavaScript concepts and frameworks.",
        price: 299.99,
        counter: 17,
        maxCounter: 20,
    }
]