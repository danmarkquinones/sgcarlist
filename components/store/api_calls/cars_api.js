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

export const fetchTotalVerifiedCars = async () => {
    return await axios.get(`${API_BASE_URL}/product-catalog/total_verified`)
}

export const fetchLandingPageLists = async (url) => {

    return await axios.get(`${API_BASE_URL}/product-catalog/${url}` , 
        {},
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
            vehicle_type: data.vehicle_type,
            color: [data.color],
            driven_wheel: data.driven_wheel,
            transmission: data.transmission,
            fuel_type: data.fuel_type
        },
        location: {
            country: data.location.country,
            region_name: data.location.region,
            city: data.location.city
        },
        car_year_model_range: {
            minimum_year: data.model_from_year,
            maximum_year: data.model_to_year
        },
        reg_year_range: {
            minimum_year: data.reg_from_year,
            maximum_year: data.reg_to_year
        },
        price_range: {
            minimum_price: data.min_price,
            maximum_price: data.max_price
        },
        mileage_range: {
            minimum_mileage: data.min_mileage,
            maximum_mileage: data.max_mileage
        },
        cc_range:{
            minimum_cc:data.min_cc,
            maximum_cc:data.max_cc
        },
        sort:data.sort
    }

    const encodedData = Kjur.encode(obj)

    console.log('token for search' , encodedData)

    return await axios.post(`${API_BASE_URL}/product-catalog/search` , 
        {
            token:encodedData
        },
        axiosConfig
    )
}

export const fetchBrands = async () => {
    return await axios.get(`${API_BASE_URL}/brands`)
}

export const fetchLocations = async () => {

    const obj = {
        iso2: "SG"
    }

    const encodedData = Kjur.encode(obj)

    return await axios.get(`${API_BASE_URL}/list_of_cities?token=${encodedData}`)
}
