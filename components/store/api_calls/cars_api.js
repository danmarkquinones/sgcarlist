import axios from "axios";
import { API_BASE_URL } from '@env'

export const fetchCars = async () => {
    //create token
    // console.log('base' , API_BASE_URL)
    return await axios.get(`${API_BASE_URL}/product-catalog`)
}