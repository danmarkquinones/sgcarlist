import axios from "axios";
import { API_BASE_URL } from '@env'
import Kjur from '../helpers/jwt'

export const fetchCars = async () => {
    //create token
    // console.log('base' , API_BASE_URL)
    return await axios.get(`${API_BASE_URL}/product-catalog`)
}

export const fetchFilteredCars = async (data) => {
    const obj = {
        keyword: "sample",
        // car_details: {
        //     car_brand_id: "619651af85a8de34621c9e63",
        //     car_condition: "Used",
        //     body_type: "Sedan",
        //     color: ["Red","White"],
        //     driven_wheel: "sample",
        //     transmission: "automatic",
        //     fuel_type: "Diesel"
        // },
        // location: {
        //     state: "AZ",
        //     country: "US"
        // },
        // year_range: {
        //     minimum_year: 2010,
        //     maximum_year: 2020
        // },
        // price_range: {
        //     minimum_price: 156.5,
        //     maximum_price: 166.5
        // },
        // mileage_range: {
        //     minimum_mileage: 1000,
        //     maximum_mileage: 1500
        // }
    }

    const token = Kjur.encode(obj)
    const decoded = Kjur.decode(token)
    console.log("TOKEN",token , decoded)
}