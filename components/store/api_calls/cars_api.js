import axios from "axios";
import { API_BASE_URL } from '@env'
import Kjur from '../helpers/jwt'

let axiosConfig = {
    headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Strict-Transport-Security": 'max-age=90'
    }
};

export const fetchCars = async () => {
    return await axios.get(`${API_BASE_URL}/product-catalog`)
}

export const fetchFilteredCars = async (data) => {
    //change the data to be pass
    const obj = {
        keyword: "sample",
        search_only:false,
        car_details: {
            car_brand_id: "619651af85a8de34621c9e63",
            car_condition: "Used",
            body_type: "Sedan",
            color: ["Red","White"],
            driven_wheel: "sample",
            transmission: "automatic",
            fuel_type: "Diesel"
        },
        location: {
            state: "AZ",
            country: "US"
        },
        year_range: {
            minimum_year: 2010,
            maximum_year: 2020
        },
        price_range: {
            minimum_price: 156.5,
            maximum_price: 166.5
        },
        mileage_range: {
            minimum_mileage: 1000,
            maximum_mileage: 1500
        }
    }

    const encodedData = Kjur.encode(obj)

    return await axios.post(`${API_BASE_URL}/user-filters` , 
        {
            token:encodedData
        },
        axiosConfig
    )
}

export const fetchFilterResults = async (data) => {
    const obj = {
        keyword: data.keyword,
        search_only:false,
        car_details: {
            car_brand_id: data.brand,
            car_condition: data.condition,
            body_type: data.body_type,
            color: [data.color],
            driven_wheel: data.driven_wheel,
            transmission: data.transmission,
            fuel_type: data.fuel_type
        },
        location: {
            state: "AZ",
            country: "SG"
        },
        year_range: {
            minimum_year: data.from_year,
            maximum_year: data.to_year
        },
        price_range: {
            minimum_price: data.min_price,
            maximum_price: data.max_price
        },
        mileage_range: {
            minimum_mileage: data.min_mileage,
            maximum_mileage: data.max_mileage
        }
    }

    const encodedData = Kjur.encode(obj)

    console.log(encodedData)

    return await axios.post(`${API_BASE_URL}/user-filters` , 
        {
            token:encodedData
        },
        axiosConfig
    )
}

export const fetchBrands = async () => {
    return await axios.get(`${API_BASE_URL}/brands`)
}