// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const {width, height} = Dimensions.get('window');

const OnboardingIndex = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  useEffect(() => {
    AsyncStorage.setItem('isLaunched', '1');
  }, []);

  const onDone = () => {
    navigation.navigate('TabNav');
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <Text style={styles.introTitleStyle}>{item.title}</Text>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
        {item.key === 's1' && (
          <View style={{flex: 1, position: 'absolute'}}>
            <Image
              style={styles.introImageStyle}
              source={require('../../../assets/images/Ob1.png')}
            />
          </View>
        )}
        {item.key === 's2' && (
          <Image
            style={styles.introImageStyle}
            source={require('../../../assets/images/Ob2.png')}
          />
        )}
        {item.key === 's3' && (
          <Image
            style={styles.introImageStyle}
            source={require('../../../assets/images/Ob3.png')}
          />
        )}
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={true}
        showSkipButton={false}
        showNextButton={false}
      />
    </>
  );
};

export default OnboardingIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: width,
    height: height,
    position: 'absolute',
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 160,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Search for your dream car from\ntop car list site in Singapore',
    title: 'Find Your\nDream Car',
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Safe & Secured',
    text: 'Find sellers with our “Trusted” badge for secure and safe deals',
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Sell Your Car',
    text: 'Post your Ad to the most number of interested buyers across Singapore',
    backgroundColor: '#22bcb5',
  },
];
