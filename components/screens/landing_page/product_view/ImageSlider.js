import React from 'react'
import { View , Image} from 'react-native'
import ImageSlider from 'react-native-image-slider';

const ImageSliderView = (props) => {

    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
    ]

    const {windowWidth} = props 

    return (
            <ImageSlider
                images={images}
                customSlide={({ index, item, style, width }) => (
                    <View key={index} style={{display:'flex', flex:1}}>
                        <Image source={{ uri: item }} style={{height:300 , width:windowWidth}} />
                    </View>
                )}
            />
    )
}

export default ImageSliderView
