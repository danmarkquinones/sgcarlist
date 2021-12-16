import React, {useContext} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {theme} from '../../contants/colors';
import Spacer from '../../custom_components/spacer';
import logo from '../../../assets/images/qr.png';
import {PrimaryButton} from '../../custom_components/customButtons';
import {CarConfigContext} from '../../store/context_api/carContext';
import {api} from '../../store/api_calls/useApi';

const UploadEighthStep = () => {
  const [carDetails, setCarDetails] = useContext(CarConfigContext);

  const onSubmit = async () => {
    const payload = {
      details_type: true,
      car_plate_number: '22398DASD',
      owner_type: 'Singapore NRIC (e.g. S1234567D)',
      owner_id: 1516239022,
      product_name: 'sample car model 10',
      product_price: 1300,
      product_transmission: 'Auto',
      fuel_type: 'Petrol',
      product_mileage: '1300',
      vehicle_features: 'sample 10',
      accessories: 'sample 10',
      product_description: 'sample 10',
      owner_id: '123',
      product_brand_id: '1',
      product_edition: 'NA',
      product_image_ids: '',
    };
    let res = await api.POST(payload, '/products');
    console.log(res);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.white}}>
      <View style={{padding: 24, flex: 1}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          You are on the last step to {'\n'} create your ad.
        </Text>
        <Spacer bottom={40} />

        <Image
          source={logo}
          style={{
            width: '100%',
            height: 400,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Spacer bottom={48} />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            onPress={onSubmit}
            color={theme.primaryBlue}
            title="Proceed"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UploadEighthStep;
