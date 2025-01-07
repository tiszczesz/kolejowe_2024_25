import { Todo } from "../MyTypes/tools";

export const getTodos = async (): Promise<Todo[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await data.json();
};