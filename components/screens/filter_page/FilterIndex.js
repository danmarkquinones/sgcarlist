import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {theme} from '../../contants/colors';

import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CustomPicker from '../../custom_components/customPicker';
import {PrimaryButton} from '../../custom_components/customButtons';
import Spacer from '../../custom_components/spacer';
import { addPinnedFilter } from '../../store/helpers/globalFunctions';
import { useToast } from "react-native-toast-notifications";

const FilterIndex = ({navigation}) => {

  const [form,setForm] = useState({
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
  const toast = useToast();

  const carBrands = ['Volvo', 'Toyota', 'Mitsubishi', 'Ford'];
  const carConditions = ['Brand new', 'Used', 'Repossesed'];
  const locations = ['Singapore', 'Philippines', 'China'];
  const bodyTypes = ['Sedan', 'Hatchback', 'Crossover', 'SUV'];
  const carColors = ['Black', 'White', 'Blue', 'Red'];
  const fuelTypes = ['Diesel', 'Petrol'];
  const drivenWheel = ['FWD(Front Wheel Drive)' , 'RWD(Rear Wheel Drive)']
  const transmissions = ['Manual' , 'Automatic'];

  const handleOnChangeFormFields = (name,value) => {
    setForm({...form,[name]:value})
    // console.log(form)
  }

  const onSaveFilter = () => {
    let filter = {
      keyword: form.keyword,
      search_only:false,
      car_details: {
          car_brand_id: form.brand,
          car_condition: form.condition,
          body_type: form.body_type,
          color: [form.color],
          driven_wheel: form.driven_wheel,
          transmission: form.transmission,
          fuel_type: form.fuel_type
      },
      location: {
          state: "",
          country: ""
      },
      year_range: {
          minimum_year: form.from_year,
          maximum_year: form.to_year
      },
      price_range: {
          minimum_price: form.min_price,
          maximum_price: form.max_price
      },
      mileage_range: {
          minimum_mileage: form.min_mileage,
          maximum_mileage: form.max_mileage
      }
    }

    // addPinnedFilter(filter)
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
            onChange={(value)=>handleOnChangeFormFields('keyword',value)}
            value={form.keyword}
            editable
            Icon={() => <AntIcon name="search1" size={25} />}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select car brand"
            items={carBrands}
            value={form.brand}
            onChange={(value)=>handleOnChangeFormFields('brand',value)}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select car condition"
            items={carConditions}
            value={form.condition}
            onChange={(value)=>handleOnChangeFormFields('condition',value)}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select location"
            items={locations}
            value={form.location}
            onChange={(value)=>handleOnChangeFormFields('location',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>
            Price range:
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min price"
                onChange={(value)=>handleOnChangeFormFields('min_price',value)}
                value={form.min_price}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max price"
                onChange={(value)=>handleOnChangeFormFields('max_price',value)}
                value={form.max_price}
                editable
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 8}}>Year range:</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Min"
                onChange={(value)=>handleOnChangeFormFields('from_year',value)}
                value={form.from_year}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max"
                onChange={(value)=>handleOnChangeFormFields('to_year',value)}
                value={form.to_year}
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
                onChange={(value)=>handleOnChangeFormFields('min_mileage',value)}
                value={form.min_mileage}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max"
                onChange={(value)=>handleOnChangeFormFields('max_mileage',value)}
                value={form.max_mileage}
                editable
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select transmission"
            items={transmissions}
            value={form.transmission}
            onChange={(value)=>handleOnChangeFormFields('transmission',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select body type"
            items={bodyTypes}
            value={form.body_type}
            onChange={(value)=>handleOnChangeFormFields('body_type',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select color"
            items={carColors}
            value={form.color}
            onChange={(value)=>handleOnChangeFormFields('color',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select fuel type"
            items={fuelTypes}
            value={form.fuel_type}
            onChange={(value)=>handleOnChangeFormFields('fuel_type',value)}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select driven wheel"
            items={drivenWheel}
            value={form.driven_wheel}
            onChange={(value)=>handleOnChangeFormFields('driven_wheel',value)}
          />
        </View>
        <Spacer bottom={50} />
      </ScrollView>
      <View
        style={{
          padding: 24,
          marginHorizontal: -5,
          shadowRadius: 1,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowColor: '#000000',
          elevation: 4,
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
    </View>
  );
};

export default FilterIndex;
