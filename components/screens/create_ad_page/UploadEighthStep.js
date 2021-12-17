import React, {useContext} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {theme} from '../../contants/colors';
import Spacer from '../../custom_components/spacer';
import logo from '../../../assets/images/qr.png';
import {PrimaryButton} from '../../custom_components/customButtons';
import {CarConfigContext} from '../../store/context_api/carContext';
import {api} from '../../store/api_calls/useApi';
import {RNS3} from 'react-native-aws3';
import {aws} from '../../store/helpers/keys';

const UploadEighthStep = () => {
  const [carDetails, setCarDetails] = useContext(CarConfigContext);

  const onSubmit = async () => {
    const payload = {
      package_price: carDetails.price,
      product_name: carDetails.title,
      car_plate_number: carDetails.plate_number,
      owner_type: carDetails.owner_id_type,
      owner_id: carDetails.owner_id,
      registration_date: carDetails.registration_date + ' 00:00:00.000Z',
      product_cc: carDetails.engine_capacity,
      omv: carDetails.omv,
      arf: carDetails.arf,
      coe: carDetails.coe,
      coe_expiry_date: carDetails.coe_expiry_date + ' 00:00:00.000Z',
      number_of_owners: carDetails.number_of_owners,
      vehicle_type: carDetails.type_of_vehicle,
      product_edition: carDetails.car_model,
      product_price: carDetails.asking_price,
      product_transmission: carDetails.transmission,
      fuel_type: carDetails.fuel_type,
      product_mileage: carDetails.mileage,
      vehicle_features: carDetails.features,
      accessories: carDetails.accessories,
      product_description: carDetails.description,
      details_type: true,
      product_image_url: null,
      product_condition: carDetails.car_condition,
      product_brand_id: carDetails.car_brand,
      is_off_peak_car: false,
      product_pickup_location: {
        street: carDetails.street,
        country: carDetails.location.country,
        region_name: carDetails.location.region,
        city: carDetails.location.city,
      },
      selected_ads_id:
        carDetails.price === 108
          ? '61bca24824a406dfb983d722'
          : '61bca22e24a406dfb983d6f9',
    };

    // uploadImages();

    let res = await api.POST(payload, '/products');
    console.log(res);
  };

  const uploadImages = () => {
    const images = carDetails.images;

    const config = {
      keyPrefix: 's3/',
      bucket: 'photos',
      region: 'us-east-1',
      accessKey: aws.accessKeyId,
      secretKey: aws.secretAccessKey,
      successActionStatus: 201,
    };

    images.forEach(image => {
      RNS3.put(image, config).then(response => {
        console.log(response);
      });
    });
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
};;

export default UploadEighthStep;
