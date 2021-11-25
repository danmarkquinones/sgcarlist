import React from 'react'
import { Text, View } from 'react-native';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../contants/colors';

const ImageViewer = (props) => {

    const {navigation} = props

    return (
        <View>
            <MatComIcon
                onPress={() => navigation.goBack(null)}
                name="arrow-left"
                size={25}
                color={theme.white}
                // style={productStyles.backIcon}
            />
            <Text>IMAGE VIEWER</Text>
        </View>
    )
}

export default ImageViewer
