import React , {useEffect , useState} from 'react'
import { FlatList } from 'react-native'
import { SquareCard, WhiteCard } from '../../../custom_components/customCards'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../../contants/colors';
import { cars } from '../../../contants/dummyCarData';

const QualifiedLists = (props) => {

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
                    Icon={()=><FontAwesome5 name='check-circle' size={20} solid color={theme.green}/>}
                />
                :<WhiteCard onPress={()=>handleSeeMore('FilterIndex' , 'qualified')} options={{width:150}}/>
            )}
        />
    )
}

export default QualifiedLists
