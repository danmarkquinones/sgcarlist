import axios from "axios";
import { API_BASE_URL } from '@env'

export const fetchCars = async (obj) => {

    console.log(API_BASE_URL , 'base')
    return await axios.get(`${API_BASE_URL}product-catalog`)
}