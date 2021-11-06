import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../styles/globalStyles'
import { tosStyles } from './tosStyles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../../contants/colors';
import { Divider } from 'react-native-elements';

const TermsService = (props) => {

    const {navigation} = props

    return (
        <View
            style={globalStyles.container}
        >
            <View style={tosStyles.tosContainer}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('')}
                >
                    <View style={tosStyles.textContainer}>
                        <Text style={tosStyles.text}>Terms & Conditions of Use</Text>
                        <Icon name="keyboard-arrow-right" size={25}  color={theme.gray}/>
                    </View>
                </TouchableOpacity>

                <Divider/>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('')}
                >
                    <View style={tosStyles.textContainer}>
                        <Text style={tosStyles.text}>Terms & Conditions for Advertisers</Text>
                        <Icon name="keyboard-arrow-right" size={25}  color={theme.gray}/>
                    </View>
                </TouchableOpacity>

                <Divider/>
                
                <TouchableOpacity
                    onPress={()=>navigation.navigate('')}
                >
                    <View style={tosStyles.textContainer}>
                        <Text style={tosStyles.text}>Personal Data Protection Notice</Text>
                        <Icon name="keyboard-arrow-right" size={25}  color={theme.gray}/>
                    </View>
                </TouchableOpacity>

                <Divider/>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('')}
                >
                    <View style={tosStyles.textContainer}>
                        <Text style={tosStyles.text}>Privacy Policy</Text>
                        <Icon name="keyboard-arrow-right" size={25}  color={theme.gray}/>
                    </View>
                </TouchableOpacity>

                <Divider/>

            </View>
            
        </View>
    )
}

export default TermsService
