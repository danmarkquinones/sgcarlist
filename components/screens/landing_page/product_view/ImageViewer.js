import React from 'react'
import { Image, View , Dimensions} from 'react-native';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../contants/colors';
import ImageSlider from 'react-native-image-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { productStyles } from '../../../styles/productStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageViewer = (props) => {

    const {navigation} = props

    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
        'https://placeimg.com/640/640/any',
        'https://placeimg.com/640/640/car',
        'https://placeimg.com/640/640/insect',
    ]

    return (
        <SafeAreaView style={{flex:1 , position:'relative'}}>
            <MatComIcon
                onPress={() => navigation.goBack(null)}
                name="arrow-left"
                size={25}
                color={theme.white}
                style={productStyles.backIcon}
            />
            <ImageSlider
                images={images}
                customSlide={({ index, item, style, width }) => (
                    <View key={index} style={{display:'flex', flex:1}}>
                        <Image source={{ uri: item }} style={{height:windowHeight , width:windowWidth}} />
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default ImageViewer
