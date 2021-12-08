import React , {useState , useEffect} from 'react'

export const FilterConfigContext = React.createContext();

export const FilterConfigContextProvider = (props) => {

    const [filters,setFilters] = useState({
        keyword:'',
        min_price:'',
        max_price:'',
        max_mileage:'',
        min_mileage:'',
        from_year:'',
        to_year:'',
        location:'',
        color:'',
        brand:'',
        condition:'',
        transmission:'',
        fuel_type:'',
        body_type:'',
        driven_wheel:'',
    })

    return (
        <FilterConfigContext.Provider value={[filters , setFilters]}>
            {props.children}
        </FilterConfigContext.Provider>
    )
}
