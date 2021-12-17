import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {useNavigation} from '@react-navigation/core';
import CustomRadioButton from '../../custom_components/customRadioButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {CarConfigContext} from '../../store/context_api/carContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const UploadSixthStep = ({onScreenChange}) => {
  const [carDetails, setCarDetails] = useContext(CarConfigContext);

  const onSetCarDetails = newImages => {
    setCarDetails({
      ...carDetails,
      images: [...carDetails.images, ...newImages],
    });
  };

  const takePicture = async () => {
    const result = await launchCamera({});
    console.log(result);
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({selectionLimit: 2});
    onSetCarDetails(result.assets);
  };

  const onRemoveImage = uri => {
    const filteredImages = carDetails.images.filter(image => image.uri !== uri);
    setCarDetails({
      ...carDetails,
      images: filteredImages,
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        takePicture();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(carDetails);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Storage Permission',
          message: 'App needs access to your storage',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openGallery();
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Spacer bottom={8} />

          <Text style={styles.title}>Upload Pictures</Text>
          <Text style={styles.subtitle}>
            Upload requirements: You can upload upto 9 images. Total image file
            size should not exceed 6MB and it's dimension should not exceed
            (4800 x 3600)pixels.
          </Text>

          <Spacer bottom={24} />

          <TouchableOpacity onPress={requestStoragePermission}>
            <View
              style={{
                width: '100%',
                height: 150,
                backgroundColor: theme.white,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#C2BEBE',
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="images" size={50} color="#C2BEBE" />
              <Text>Upload Images</Text>
            </View>
          </TouchableOpacity>

          {carDetails.images.length ? (
            <Text style={{marginVertical: 16}}>Image Preview</Text>
          ) : null}

          {carDetails.images.length
            ? carDetails.images.map((image, i) => (
                <View key={i}>
                  <MaterialCommunityIcons
                    onPress={() => onRemoveImage(image.uri)}
                    style={{
                      zIndex: 10,
                      position: 'absolute',
                      right: 20,
                      top: 20,
                    }}
                    name="close"
                    size={24}
                    color="#C2BEBE"
                  />
                  <Image
                    style={{
                      width: '100%',
                      height: 200,
                      borderRadius: 8,
                      marginBottom: 16,
                    }}
                    source={{uri: image.uri}}
                  />
                </View>
              ))
            : null}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(4)}
              title="Back"
              color={theme.secondaryBlue}
            />
          </View>
          <Spacer left={48} />
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(6)}
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
export default UploadSixthStep;
