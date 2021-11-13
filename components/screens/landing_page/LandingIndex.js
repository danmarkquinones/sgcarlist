import React, {useContext} from 'react';
import {View} from 'react-native';
import {UserConfigContext} from '../../store/context_api/userContext';
import {landingStyles} from '../../styles/landingStyles';
import BuyerLanding from './buyer_landing/buyerLanding';
import PostAds from './seller_landing/PostAds';

const LandingIndex = props => {
  const {navigation} = props;
  const [userConfig] = useContext(UserConfigContext);

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

  return (
    <View style={landingStyles.container}>
      {/* if !isSellMode */}
      {userConfig.isSellMode === 0 ? (
        <BuyerLanding items={items} navigation={navigation} dealers={dealers} />
      ) : (
        <PostAds />
      )}

      {/* if isSellMode at AsyncStorage */}
    </View>
  );
};

export default LandingIndex;
