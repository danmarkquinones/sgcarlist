import React , {useEffect , useState} from 'react'
import { FlatList } from 'react-native'
import { SquareCard, WhiteCard } from '../../../custom_components/customCards'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../../contants/colors';
import { cars } from '../../../contants/dummyCarData';

const FavoritesLists = (props) => {

    const {navigation , handleSeeMore} = props 

    return (
        <FlatList
            horizontal
            data={cars}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item , index})=>(
                index!==3 ?
                <SquareCard
                    onPress={()=>navigation.navigate('ProductView', item)}
                    car={item} 
                    Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                />
                :<WhiteCard onPress={()=>handleSeeMore('FavoriteStacks')} options={{width:150}}/>
            )}
        />
    )
}

export default FavoritesLists
