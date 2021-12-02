import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {theme} from '../../contants/colors';

import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CustomPicker from '../../custom_components/customPicker';
import {PrimaryButton} from '../../custom_components/customButtons';
import Spacer from '../../custom_components/spacer';

const FilterIndex = ({navigation}) => {
  const [selectedCarBrand, setSelectedCarBrand] = useState(null);
  const [selectedCarCondition, setSelectedCarCondition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFuelType, setSelectedFuelType] = useState(null);

  const carBrands = ['Volvo', 'Toyota', 'Mitsubishi', 'Ford'];
  const carConditions = ['Brand new', 'Used', 'Repossesed'];
  const locations = ['Singapore', 'Philippines', 'China'];
  const bodyTypes = ['Sedan', 'Hatchback', 'Crossover', 'SUV'];
  const carColors = ['Black', 'White', 'Blue', 'Red'];
  const fuelTypes = ['Diesel', 'Petrol'];

  const handleOnChangeCarBrand = value => {
    setSelectedCarBrand(value);
  };

  const handleOnChangeCarCondition = value => {
    setSelectedCarCondition(value);
  };

  const handleOnChangeLocation = value => {
    setSelectedLocation(value);
  };

  const handleOnChangeBodyType = value => {
    setSelectedBodyType(value);
  };

  const handleOnChangeColor = value => {
    setSelectedColor(value);
  };

  const handleOnChangeFuelType = value => {
    setSelectedFuelType(value);
  };

  return (
    <View style={{backgroundColor: theme.lightBlue, flex: 1}}>
      <CustomHeader title="Search / Filter" />
      <ScrollView style={{padding: 24, flex: 1}}>
        <View>
          <PrimaryInput
            placeholder="Keyword"
            onChange={() => {}}
            value={() => {}}
            editable
            Icon={() => <AntIcon name="search1" size={25} />}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select car brand"
            items={carBrands}
            value={selectedCarBrand}
            onChange={handleOnChangeCarBrand}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select car condition"
            items={carConditions}
            value={selectedCarCondition}
            onChange={handleOnChangeCarCondition}
          />
        </View>
        <Spacer bottom={16} />
        <View>
          <CustomPicker
            placeholder="Select location"
            items={locations}
            value={selectedLocation}
            onChange={handleOnChangeLocation}
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
                onChange={() => {}}
                value={() => {}}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max price"
                onChange={() => {}}
                value={() => {}}
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
                onChange={() => {}}
                value={() => {}}
                editable
              />
            </View>
            <Spacer right={16} />
            <View style={{flex: 1}}>
              <PrimaryInput
                placeholder="Max"
                onChange={() => {}}
                value={() => {}}
                editable
              />
            </View>
          </View>
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select body type"
            items={bodyTypes}
            value={selectedBodyType}
            onChange={handleOnChangeBodyType}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select color"
            items={carColors}
            value={selectedColor}
            onChange={handleOnChangeColor}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select fuel type"
            items={fuelTypes}
            value={selectedFuelType}
            onChange={handleOnChangeFuelType}
          />
        </View>
        <Spacer bottom={16} />

        <View>
          <CustomPicker
            placeholder="Select driven wheel"
            items={fuelTypes}
            value={selectedFuelType}
            onChange={handleOnChangeFuelType}
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
          onPress={() => {}}
        />
        <Spacer bottom={8} />
        <PrimaryButton
          color={'#254A7C'}
          title={'Apply filter'}
          onPress={() => navigation.navigate('SearchResult')}
        />
      </View>
    </View>
  );
};

export default FilterIndex;
