import React , {useEffect , useState} from 'react'
import { FlatList } from 'react-native'
import { DealerCard, WhiteCard } from '../../../custom_components/customCards'
import { dealers } from '../../../contants/dummyCarData';

const TopDealersLists = (props) => {

    const {navigation} = props

    return (
        <FlatList
            horizontal
            data={dealers}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item , index})=>(
                index!==3 ?
                <DealerCard 
                    dealer={item}
                    onPress={()=>navigation.navigate('SellerView' , item)}
                />
                :<WhiteCard 
                    options={{width:150}}
                    onPress={()=>navigation.navigate('SearchResult')}
                />
            )}
        />
    )
}

export default TopDealersLists
