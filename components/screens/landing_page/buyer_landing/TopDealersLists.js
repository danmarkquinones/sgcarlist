import React , {useEffect , useState} from 'react'
import { FlatList } from 'react-native'
import { DealerCard, WhiteCard } from '../../../custom_components/customCards'
import { dealers } from '../../../contants/dummyCarData';
import {get} from '../../../store/api_calls/authentication';

const TopDealersLists = props => {
  const {navigation} = props;

  const [dealers2, setDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDealers();
  }, []);

  const getDealers = async () => {
    const res = await get('/product-catalog/featured-dealers');
    if (res?.data?.success) {
      setDealers(res.data.data);
      setIsLoading(false);
    } else {
      setDealers([]);
      setIsLoading(false);
    }
  };

  return (
    <FlatList
      horizontal
      data={dealers2}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) =>
        index !== 3 ? (
          <DealerCard
            dealer={item}
            onPress={() => navigation.navigate('SellerView', item)}
          />
        ) : (
          <WhiteCard
            options={{width: 150}}
            onPress={() => navigation.navigate('SearchResult')}
          />
        )
      }
    />
  );
};

export default TopDealersLists
