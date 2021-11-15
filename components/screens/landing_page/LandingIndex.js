import React, {useState , useContext , useEffect} from 'react';
import {View , Image, Dimensions, TouchableOpacity} from 'react-native';
import { Overlay } from 'react-native-elements';
import {UserConfigContext} from '../../store/context_api/userContext';
import {landingStyles} from '../../styles/landingStyles';
import BuyerLanding from './buyer_landing/buyerLanding';
import PostAds from './seller_landing/PostAds';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { theme } from '../../contants/colors';

const LandingIndex = props => {
  const {navigation} = props;
  const [userConfig] = useContext(UserConfigContext);
  const [showAdModal , setShowAdModal] = useState(false);

  useEffect(()=>{
    toggleOverlay() 
  },[])

  const items = [
    {
      id: '1',
      name: 'SUC High Speed V446',
      price: '1,499 USD',
      location: 'Jurong , Singapore',
      url: require('../../../assets/images/car1.jpg'),
    },
    {
      id: '2',
      name: 'RPB Meta Build V4374',
      price: '1,499 USD',
      location: 'Jurong , Singapore',
      url: require('../../../assets/images/car2.jpg'),
    },
    {
      id: '3',
      name: 'ABP Hi Morale V546',
      price: '1,499 USD',
      location: 'Jurong , Singapore',
      url: require('../../../assets/images/car3.jpg'),
    },
    {
      id: '4',
      name: 'ABB Critical V476',
      price: '1,499 USD',
      location: 'Jurong , Singapore',
      url: '',
    },
  ];

  const dealers = [
    {
      id: '1',
      url: require('../../../assets/images/bm2.jpg'),
      name: 'Lorem Ipsum',
      deals: 503,
    },
    {
      id: '2',
      url: require('../../../assets/images/bm3.png'),
      name: 'Johnny Cage',
      deals: 393,
    },
    {
      id: '3',
      url: require('../../../assets/images/car3.jpg'),
      name: 'Sky Maviricks',
      deals: 295,
    },
    {id: '4', url: '', name: 'Sky Maviricks', deals: 295},
  ];

  const toggleOverlay = () => {
    setShowAdModal(!showAdModal)
  }

  return (
    <View style={landingStyles.container}>
      {/* if !isSellMode */}
      {userConfig.isSellMode === 0 ? (
        <View>
            <Overlay
              isVisible={showAdModal} onBackdropPress={toggleOverlay}
            >
              <View style={{position:'relative'}}> 
                <TouchableOpacity onPress={()=>toggleOverlay()} style={{position:'absolute' , right:-20,top:-20 , zIndex:2}} >
                  <AntIcon name='closecircle' size={30}  color={theme.secondaryBlue}/> 
                </TouchableOpacity>
                <Image style={{height: 350 , width:350 }} source={require('../../../assets/images/main_ad.jpg')}/>
              </View>
            </Overlay>
            <BuyerLanding items={items} navigation={navigation} dealers={dealers} />
        </View>
        
      ) : (
        <PostAds />
      )}

      {/* if isSellMode at AsyncStorage */}
    </View>
  );
};

export default LandingIndex;
