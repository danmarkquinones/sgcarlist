import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {useNavigation} from '@react-navigation/core';
import CustomRadioButton from '../../custom_components/customRadioButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CarConfigContext} from '../../store/context_api/carContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const UploadFifthStep = ({onScreenChange}) => {
  const [carDetails, setCarDetails] = useContext(CarConfigContext);
  const navigation = useNavigation();
  const [selectedValueEmail, setSelectedValueEmail] = useState('0');

  const onSetCarDetails = keyValue => {
    setCarDetails({...carDetails, ...keyValue});
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Spacer bottom={8} />

          <Text style={styles.title}>Car Details 3 of 3</Text>
          <Text style={styles.subtitle}>
            note: (*) fields are compulsory to be filled up
          </Text>

          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>
              Car Model <Text style={{color: theme.red}}>*</Text>:
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.car_model}
              onChange={val => onSetCarDetails({car_model: val})}
              placeholder="Select Car Model"
            />
          </View>
          <Spacer bottom={8} />

          <View
            style={{
              marginBottom: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              style={{marginRight: 8}}
              name="checkbox-blank-outline"
              size={20}
            />
            <Text>Tick if your car is an Off-Peak Car</Text>
          </View>

          <View
            style={{flexDirection: 'row', paddingLeft: 16, paddingRight: 32}}>
            <CustomRadioButton
              data={[
                {
                  value: '0',
                  label: 'Old OPC scheme (Use half-day on Saturdays)',
                },
                {
                  value: '1',
                  label: 'Old OPC scheme (Use half-day on Saturdays)',
                },
                {
                  value: '2',
                  label: 'Old OPC scheme (Use half-day on Saturdays)',
                },
              ]}
              selectedValue={selectedValueEmail}
              onSelectRadio={value => setSelectedValueEmail(value)}
              isHorizontal
            />
          </View>

          <View>
            <Text style={styles.label}>
              Asking Price <Text style={{color: theme.red}}>*</Text>:
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.asking_price}
              onChange={val => onSetCarDetails({asking_price: val})}
              placeholder="Asking Price"
            />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>
              Transmission <Text style={{color: theme.red}}>*</Text>:
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.transmission}
              onChange={val => onSetCarDetails({transmission: val})}
              placeholder="Transmission"
            />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>
              Fuel Type <Text style={{color: theme.red}}>*</Text>:
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.fuel_type}
              onChange={val => onSetCarDetails({fuel_type: val})}
              placeholder="Fuel Type"
            />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>
              Mileage <Text style={{color: theme.red}}>*</Text>:
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.mileage}
              onChange={val => onSetCarDetails({mileage: val})}
              placeholder="Mileage"
            />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>Vehicle Features :</Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.features}
              onChange={val => onSetCarDetails({features: val})}
              placeholder=""
              height={100}
              multiline={true}
            />
            <Text style={[styles.sublabel, {textAlign: 'right'}]}>0/150</Text>
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>Accessories :</Text>
            <Spacer bottom={8} />
            <PrimaryInput
              value={carDetails.accessories}
              onChange={val => onSetCarDetails({accessories: val})}
              placeholder=""
              height={100}
              multiline={true}
            />
            <Text style={[styles.sublabel, {textAlign: 'right'}]}>0/150</Text>
          </View>
          <Spacer bottom={8} />

          {/* <View>
            <Text style={styles.label}>Description :</Text>
            <Spacer bottom={8} />
            <PrimaryInput
              onChange={() => {}}
              placeholder=""
              height={100}
              multiline={true}
            />
            <Text style={[styles.sublabel, {textAlign: 'right'}]}>0/150</Text>
          </View> */}
          <Spacer bottom={8} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(3)}
              title="Back"
              color={theme.secondaryBlue}
            />
          </View>
          <Spacer left={48} />
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(5)}
              color={theme.primaryBlue}
              title="Next"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightBlue,
    padding: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleFont(20),
    color: '#4F4A4A',
  },
  subtitle: {
    color: '#4F4A4A',
  },
  label: {
    color: '#4F4A4A',
  },
  sublabel: {
    color: '#4F4A4A',
    fontSize: 10,
  },
});
export default UploadFifthStep;
