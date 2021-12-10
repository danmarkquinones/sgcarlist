import React, {useState , useEffect , useContext} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {theme} from '../../contants/colors';

import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {CustomPicker , CustomPickerAsync} from '../../custom_components/customPicker';
import {PrimaryButton} from '../../custom_components/customButtons';
import Spacer from '../../custom_components/spacer';
import { addPinnedFilter } from '../../store/helpers/globalFunctions';
import { useToast } from "react-native-toast-notifications";
import { fetchBrands } from '../../store/api_calls/cars_api';
import { FilterConfigContext } from '../../store/context_api/filterContext';

const FilterIndex = ({navigation}) => {

  const [filters,setFilters] = useContext(FilterConfigContext)

  const toast = useToast();

  const [carBrands , setCarBrands] = useState([]);
  const carConditions = ['Brand new', 'Used', 'Repossesed'];
  // const locations = ['Singapore', 'Philippines', 'China'];
  const vehicleTypes = [
    'Hybrid',
    'Electric',
    'Hatchback',
    'Luxury Sedan',
    'MPV',
    'Mid-sized Sedan',
    'Sports Car',
    'Stationwagon',
    'SUV',
    'Commercial Vehicle',
    'Passenger Cars',
    'Any'
  ];
  const carColors = ['Black', 'White', 'Blue', 'Red'];
  const fuelTypes = ['Diesel', 'Petrol'];
  const drivenWheel = ['FWD(Front Wheel Drive)' , 'RWD(Rear Wheel Drive)']
  const transmissions = ['Manual' , 'Automatic'];

  useEffect(() => {
    const getBrands = fetchBrands()
    getBrands.then((res)=>{
      if(res.data){
          const displayBrands = res.data.data
          setCarBrands(displayBrands)
      }
    }).catch((e)=>{
        console.log('call failed' , e)
    })
  }, [])

  const handleFilterChange = (name,value) => {
    setFilters({...filters,[name]:value})
    // console.log(filters)
  }

  const onSaveFilter = () => {
    let filter = {
      keyword: filters.keyword,
      search_only:false,
      car_details: {
          car_brand_id: filters.brand,
          car_condition: filters.condition,
          vehicle_type: filters.vehicle_type,
          color: [filters.color],
          driven_wheel: filters.driven_wheel,
          transmission: filters.transmission,
          fuel_type: filters.fuel_type
      },
      location: {
          state: "",
          country: ""
      },
      model_year_range: {
          minimum_year: filters.model_from_year,
          maximum_year: filters.model_to_year
      },
      reg_year_range: {
        minimum_year: filters.reg_from_year,
        maximum_year: filters.reg_to_year
      },
      price_range: {
          minimum_price: filters.min_price,
          maximum_price: filters.max_price
      },
      mileage_range: {
          minimum_mileage: filters.min_mileage,
          maximum_mileage: filters.max_mileage
      },
      cc_range: {
        minimum_mileage: filters.min_cc,
        maximum_mileage: filters.max_cc
      },
      sort:'desc-price'
    }

    addPinnedFilter(filter)
    toast.show('Filter Saved!' , {type: "success"})
  }

  const onApplyFilter = () => {
    navigation.navigate('SearchResult')
  }

  return (
    <View style={{backgroundColor: theme.lightBlue, flex: 1}}>
      <CustomHeader title="Search / Filter" />
      <ScrollView style={{padding: 24, flex: 1}}>
        <View>
          <PrimaryInput
            placeholder="Keyword"
            onChange={(value)=>handleFilterChange('keyword',value)}
            value={filters.keyword}
            editable
            Icon={() => <AntIcon name="search1" size={25} style={{marginRight:10}}/>}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPickerAsync
            placeholder="Select car brand"
            items={carBrands}
            value={filters.brand}
            onChange={(value)=>handleFilterChange('brand',value)}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select car condition"
            items={carConditions}
            value={filters.condition}
            onChange={(value)=>handleFilterChange('condition',value)}
          />
        </View>
        <Spacer bottom={16} />

        {/* <View>
          <CustomPicker
            placeholder="Select location"
            items={locations}
            value={filters.location}
            onChange={(value)=>handleFilterChange('location',value)}
          />
        </View>
        <Spacer bottom={16} /> */}

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>
            Price range:
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min price"
                onChange={(value)=>handleFilterChange('min_price',value)}
                value={filters.min_price}
                Unit={()=><Text style={{marginRight:10}}>S$</Text>}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max price"
                onChange={(value)=>handleFilterChange('max_price',value)}
                value={filters.max_price}
                Unit={()=><Text style={{marginRight:10}}>S$</Text>}
                editable
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>Model Year range:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min : YYYY"
                onChange={(value)=>handleFilterChange('model_from_year',value)}
                value={filters.model_from_year}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max : YYYY"
                onChange={(value)=>handleFilterChange('model_to_year',value)}
                value={filters.model_to_year}
                editable
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>Registration Year range:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min : YYYY"
                onChange={(value)=>handleFilterChange('reg_from_year',value)}
                value={filters.reg_from_year}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max : YYYY"
                onChange={(value)=>handleFilterChange('reg_to_year',value)}
                value={filters.reg_to_year}
                editable
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>Mileage range:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min"
                onChange={(value)=>handleFilterChange('min_mileage',value)}
                value={filters.min_mileage}
                editable
                Unit={()=><Text style={{marginRight:10}}>mpg</Text>}
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max"
                onChange={(value)=>handleFilterChange('max_mileage',value)}
                value={filters.max_mileage}
                editable
                Unit={()=><Text style={{marginRight:10}}>mpg</Text>}
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>Engine Cap range:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min"
                onChange={(value)=>handleFilterChange('min_cc',value)}
                value={filters.min_cc}
                editable
                Unit={()=><Text style={{marginRight:10}}>cc</Text>}
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max"
                onChange={(value)=>handleFilterChange('max_cc',value)}
                value={filters.max_cc}
                editable
                Unit={()=><Text style={{marginRight:10}}>cc</Text>}
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select transmission"
            items={transmissions}
            value={filters.transmission}
            onChange={(value)=>handleFilterChange('transmission',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select body type"
            items={vehicleTypes}
            value={filters.vehicle_type}
            onChange={(value)=>handleFilterChange('vehicle_type',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select color"
            items={carColors}
            value={filters.color}
            onChange={(value)=>handleFilterChange('color',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select fuel type"
            items={fuelTypes}
            value={filters.fuel_type}
            onChange={(value)=>handleFilterChange('fuel_type',value)}
          />
        </View>
        <Spacer bottom={16} />

        {/* <View>
          <CustomPicker
            placeholder="Select driven wheel"
            items={drivenWheel}
            value={filters.driven_wheel}
            onChange={(value)=>handleFilterChange('driven_wheel',value)}
          />
        </View>
        <Spacer bottom={50} /> */}
        <View
          style={{
            // padding: 24,
            paddingBottom:50,
            marginHorizontal: -5,
            // shadowRadius: 1,
            // shadowOffset: {
            //   width: 0,
            //   height: -1,
            // },
            // shadowColor: '#000000',
            // elevation: 4,
          }}>
          <PrimaryButton
            color={'#20A8F4'}
            title={'Save filter'}
            onPress={onSaveFilter}
          />
          <Spacer bottom={8} />
          <PrimaryButton
            color={'#254A7C'}
            title={'Apply filter'}
            onPress={onApplyFilter}
          />
        </View>
      </ScrollView>
      
    </View>
  );
};

export default FilterIndex;
