import axios from "axios";

export const fetchCars = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
}